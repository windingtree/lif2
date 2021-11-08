import type { Signer } from 'ethers';
import { expect } from 'chai';
import hre from 'hardhat';
import { domainSeparator } from './helpers/sig';
import { prepareOldLif, stuckBalances } from './helpers/lif';

describe('Lif2 contract upgrade to V3', () => {
  let signers: Signer[];
  let deployer: Signer;
  let holder1: Signer;
  let holder1Address: string;
  let oldLif: any;
  let Lif2: any;
  let Lif2V2: any;
  let Lif2V3: any;

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
    Lif2V3 = (await hre.ethers.getContractFactory('Lif2TestV3'))
      .connect(proxyAdminOwnerSigner);
  });

  it('should upgrade', async () => {
    // V1
    const instanceV1 = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
    // V1 -> V2
    const instanceV2 = await hre.upgrades.upgradeProxy(instanceV1.address, Lif2V2);
    const initialName = await instanceV2.name();
    const initialSymbol = await instanceV2.symbol();
    const initialDomainSeparator = await instanceV2.DOMAIN_SEPARATOR();
    expect(initialName).to.equal('LifToken');
    expect(initialSymbol).to.equal('LIF');
    expect(initialDomainSeparator).to.equal(
      await domainSeparator('LifToken', '1', 1337, instanceV2.address)
    );
    // V2 -> V3
    const instanceV3 = await hre.upgrades.upgradeProxy(
      instanceV2.address,
      Lif2V3
    );
    const name = await instanceV3.name();
    const symbol = await instanceV3.symbol();
    const initialDomainSeparatorV3 = await instanceV3.DOMAIN_SEPARATOR();
    expect(name).to.equal('Lif');
    expect(symbol).to.equal('LIF');
    expect(initialDomainSeparatorV3).to.equal(
      await domainSeparator('Lif', '1', 1337, instanceV3.address)
    );
  });
});
