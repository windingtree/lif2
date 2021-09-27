import type { BigNumber, Signer, Contract } from 'ethers';
import { expect } from 'chai';
import { BigNumber as BN } from 'ethers';
import hre from 'hardhat';
import { prepareOldLif, stuckBalances } from './helpers/lif';
const utils = hre.ethers.utils;

describe('Lif2 contract upgrade to V2', () => {
  let signers: Signer[];
  let deployer: Signer;
  let holder1: Signer;
  let holder1Address: string;
  let oldLif: any;
  let Lif2: any;
  let Lif2V2: any;

  before(async () => {
    signers = await hre.ethers.getSigners();
    deployer = signers[0];
    holder1 = signers[2];
    holder1Address = await holder1.getAddress();

    // Setup old Lif
    oldLif = await prepareOldLif(deployer, [holder1Address], stuckBalances);

    const proxyAdmin = await hre.upgrades.admin.getInstance();
    let proxyAdminOwner = await proxyAdmin.owner();
    let proxyAdminOwnerSigner: Signer | undefined = undefined;

    // We need to reuse proxy admin ownership configuration from previous tests set
    for (let s of signers) {
      const signerAddress =  await s.getAddress();
      if (signerAddress === proxyAdminOwner) {
        proxyAdminOwnerSigner = s;
      }
    }
    if (!proxyAdminOwnerSigner) {
      throw new Error(
        'Test configuration error. Unable to find proxy admin owner signer.'
      );
    }

    Lif2 = (await hre.ethers.getContractFactory('Lif2Test'))
      .connect(proxyAdminOwnerSigner);
    Lif2V2 = (await hre.ethers.getContractFactory('Lif2TestV2'))
      .connect(proxyAdminOwnerSigner);
  });

  describe('Lif2 upgrade', () => {

    it('should upgrade', async () => {
      const holder1Balance = await oldLif.balanceOf(holder1Address);
      let instance = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      await oldLif.connect(holder1).approve(instance.address, holder1Balance);
      await instance.connect(holder1).claim();

      // should to throw when transfer to itself
      await expect(
        instance
          .connect(holder1)
          .transfer(
            instance.address,
            holder1Balance
          )
      ).revertedWith('ERC20: transfer to the contract');
      await expect(
        instance
          .connect(holder1)
          .transfer(
            oldLif.address,
            holder1Balance
          )
      ).revertedWith('ERC20: transfer to the contract');

      const upgraded = await hre.upgrades.upgradeProxy(instance.address, Lif2V2);

      // should to throw when transfer to itself
      await expect(
        upgraded
          .connect(holder1)
          .transfer(
            upgraded.address,
            holder1Balance
          )
      ).revertedWith('ERC20: transfer to the contract');
      // should not to throw when transfer to another contract
      await upgraded.connect(holder1).transfer(oldLif.address, holder1Balance);
      expect(await upgraded.balanceOf(oldLif.address)).to.equal(holder1Balance);
    });
  });
});
