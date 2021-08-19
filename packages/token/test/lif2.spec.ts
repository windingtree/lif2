import { expect } from 'chai';
import hre from 'hardhat';
const utils = hre.ethers.utils;

describe('Lif2 contract', () => {
  let signers;
  let deployer;
  let holder1;
  let holder1Address;
  let OldLifTest: any;
  let oldLif: any;
  let Lif2: any;
  let Lif2UpgradeabilityTest: any;

  before(async () => {
    signers = await hre.ethers.getSigners();
    deployer = signers[0];
    holder1 = signers[1];
    holder1Address = await holder1.getAddress();
    OldLifTest = await hre.ethers.getContractFactory('OldLifTest');
    oldLif = await OldLifTest.connect(deployer).deploy();
    await oldLif.deployed();
    await oldLif.mint(holder1Address, utils.parseUnits('100', 'gwei'));

    Lif2 = await hre.ethers.getContractFactory('Lif2');
    Lif2UpgradeabilityTest = await hre.ethers.getContractFactory('Lif2UpgradeabilityTest');
  });

  describe('Upgradeability', () => {

    it('should upgrade', async () => {
      const instance = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      const upgraded = await hre.upgrades.upgradeProxy(instance.address, Lif2UpgradeabilityTest);
      const value = await upgraded.newFunction();
      expect(value).to.equal(true);
    });
  });
});
