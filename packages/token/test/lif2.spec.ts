import type { Signer } from 'ethers';
import { expect } from 'chai';
import hre from 'hardhat';
const utils = hre.ethers.utils;

describe('Lif2 contract', () => {
  let signers;
  let deployer: Signer;
  let deployerAddress: string;
  let deployer1: Signer;
  let holder1: Signer;
  let holder2: Signer;
  let holder1Address: string;
  let holder2Address: string;
  let oldLif: any;
  let Lif2: any;
  let Lif2UpgradeabilityTest: any;

  const prepareOldLif = async (signer: Signer, holders: string[] = []) => {
    const OldLifTest = await hre.ethers.getContractFactory('OldLifTest');
    const instance = await OldLifTest.connect(signer).deploy();
    await instance.deployed();

    if (holders.length > 0) {
      for (let holder of holders) {
        await instance.mint(holder, utils.parseUnits('100', 'gwei'));
      }
    }

    return instance;
  };

  before(async () => {
    signers = await hre.ethers.getSigners();
    // for (let s of signers) {
    //   console.log('===', await s.getAddress());
    // }
    deployer = signers[0];
    deployer1 = signers[1];
    holder1 = signers[2];
    holder2 = signers[3];
    deployerAddress = await deployer.getAddress();
    holder1Address = await holder1.getAddress();
    holder2Address = await holder2.getAddress();

    // Setup old Lif
    oldLif = await prepareOldLif(deployer, [holder1Address]);

    Lif2 = await hre.ethers.getContractFactory('Lif2');
    Lif2UpgradeabilityTest = await hre.ethers.getContractFactory('Lif2UpgradeabilityTest');
  });

  describe('Initialization', () => {
    let lif: any;

    before(async () => {
      lif = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
    });

    it('should implement ERC20 interface', async () => {
      expect(await lif.name()).equal('Lif Token');
      expect(await lif.symbol()).equal('LIF');
      expect((await lif.decimals()).toString()).equal('18');
    });

    it('should have a proper totalSupply', async () => {
      const totalSupply = await lif.totalSupply();
      expect(totalSupply).equal(await oldLif.totalSupply());
      expect(await lif.balanceOf(lif.address)).equal(totalSupply);
    });
  });

  describe('Upgradeability behavior', () => {

    it('should upgrade', async () => {
      const instance = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      const instanceWithFutureInterface = Lif2UpgradeabilityTest.attach(instance.address);
      await expect(instanceWithFutureInterface.newFunction()).reverted;
      const upgraded = await hre.upgrades.upgradeProxy(instance.address, Lif2UpgradeabilityTest);
      const value = await upgraded.newFunction();
      expect(value).to.equal(true);
    });

    it('should throw if initializer called twice', async () => {
      const instance = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      await expect(instance.initialize(oldLif.address))
        .revertedWith('Initializable: contract is already initialized');
    });

    it('should move proxy admin ownership', async () => {
      const instance = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      const newOwner = await deployer1.getAddress();
      const adminInstance = await hre.upgrades.admin.getInstance();
      expect(await adminInstance.owner()).equal(deployerAddress);

      await hre.upgrades.admin.transferProxyAdminOwnership(newOwner);
      expect(await adminInstance.owner()).equal(newOwner);

      await expect(
        hre.upgrades.upgradeProxy(instance.address, Lif2UpgradeabilityTest)
      ).revertedWith('Ownable: caller is not the owner');

      // Because the plugin takes the transaction signer from contract factory
      // we `refreshing` the factory using new signer
      const Lif2UpgradeabilityTest2 = await hre.ethers
        .getContractFactory('Lif2UpgradeabilityTest', deployer1);// <- new owner

      const upgraded = await hre.upgrades.upgradeProxy(
        instance.address,
        Lif2UpgradeabilityTest2
      );
      const value = await upgraded.newFunction();
      expect(value).to.equal(true);
    });
  });

  describe('Governance', () => {
    let lif: any;

    beforeEach(async () => {
      lif = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
    });

    describe('Ownable behavior', () => {

      it('should return an owner', async () => {
        const owner = await lif.owner();
        expect(owner).equal(deployerAddress);
      });
    });

    describe('Pausable behavior', () => {

      describe('#paused()', () => {

        it('should return paused state', async () => {
          expect(await lif.paused()).equal(false);
        });
      });

      describe('#pause()', () => {

        it('should pause contract', async () => {
          const tx = await lif.pause();
          expect(tx).to.emit(lif, 'Paused').withArgs(deployerAddress);
          expect(await lif.paused()).equal(true);
        });

        it('should throw if already paused', async () => {
          await lif.pause();
          await expect(lif.pause()).revertedWith('Pausable: paused');
        });

        it('should throw if called not by an owner', async () => {
          const lifContract = lif.connect(holder1);
          await expect(lifContract.pause()).revertedWith('Ownable: caller is not the owner');
        });
      });

      describe('#unpause()', () => {

        it('should unpause contract', async () => {
          await lif.pause();
          expect(await lif.paused()).equal(true);
          const tx = await lif.unpause();
          expect(tx).to.emit(lif, 'Unpaused').withArgs(deployerAddress);
          expect(await lif.paused()).equal(false);
        });

        it('should throw if already unpaused', async () => {
          await expect(lif.unpause()).revertedWith('Pausable: not paused');
        });

        it('should throw if called not by an owner', async () => {
          const lifContract = lif.connect(holder1);
          await expect(lifContract.unpause()).revertedWith('Ownable: caller is not the owner');
        });
      });
    });
  });

  describe('Claimable behavior', () => {
    let lif: any;

    beforeEach(async () => {
      lif = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
    });

    describe('#claim()', () => {

      it('should throw if nothing to claim', async () => {
        const lifContract = lif.connect(holder2);
        await expect(lifContract.claim())
          .revertedWith('Claimable: nothing to claim');
      });

      it('should throw if tokens not allowed', async () => {
        const lifContract = lif.connect(holder1);
        await expect(lifContract.claim())
          .revertedWith('ERC20: transfer amount exceeds allowance');
        const oldLifContract = oldLif.connect(holder1);
        const balance = await oldLifContract.balanceOf(holder1Address);
        await oldLifContract.approve(lifContract.address, balance.div(2));
        await expect(lifContract.claim())
          .revertedWith('ERC20: transfer amount exceeds allowance');
      });

      it('should claim tokens', async () => {
        const oldLifContract = oldLif.connect(holder1);
        const lifContract = lif.connect(holder1);
        const balance = await oldLifContract.balanceOf(holder1Address);
        await oldLifContract.approve(lifContract.address, balance);
        const tx = await lifContract.claim();
        expect(tx).to.emit(lifContract, 'Claim').withArgs(
          holder1Address,
          balance
        );
        expect(await oldLifContract.balanceOf(holder1Address)).equal(0);
        expect(await lifContract.balanceOf(holder1Address)).equal(balance);
      });
    });

    describe('#stopped()', () => {

      it('should return stopped state', async () => {
        expect(await lif.stopped()).equal(false);
      });
    });

    describe('#stop()', () => {

      it('should stop claimable feature', async () => {
        const tx = await lif.stop();
        expect(tx).to.emit(lif, 'Stopped').withArgs(deployerAddress);
        expect(await lif.stopped()).equal(true);
      });

      it('should throw if the feature is already stopped', async () => {
        await lif.stop();
        await expect(lif.stop()).revertedWith('Claimable: stopped');
      });

      it('should throw if called not by an owner', async () => {
        const lifContract = lif.connect(holder1);
        await expect(lifContract.stop()).revertedWith('Ownable: caller is not the owner');
      });
    });
  });

  describe('ERC20 features', () => {
    let oldLifContract: any;
    let lifContract: any;
    let balance: any;

    beforeEach(async () => {
      const oldLif = await prepareOldLif(deployer, [holder1Address]);
      const lif = await hre.upgrades.deployProxy(Lif2, [oldLif.address]);
      oldLifContract = oldLif.connect(holder1);
      lifContract = lif.connect(holder1);
      balance = await oldLifContract.balanceOf(holder1Address);
      await oldLifContract.approve(lifContract.address, balance);
      await lifContract.claim();
    });

    describe('#transfer(address,uint256)', () => {

      it('should throw if paused', async () => {
        let lif = lifContract.connect(deployer);
        await lif.pause();
        lif = lifContract.connect(holder1);
        await expect(lifContract.transfer(
          holder2Address,
          balance
        )).revertedWith('Pausable: paused');
      });

      it('should throw if insufficient funds', async () => {
        await expect(lifContract.transfer(
          holder2Address,
          balance.mul(2)
        )).revertedWith('ERC20: transfer amount exceeds balance');
      });

      it('should throw if recipient is a contract', async () => {
        await expect(lifContract.transfer(
          lifContract.address,
          balance
        )).revertedWith('ERC20: transfer to the contract');
      });

      it('should transfer funds', async () => {
        const tx = await lifContract.transfer(
          holder2Address,
          balance
        );
        expect(tx).to.emit(lifContract, 'Transfer').withArgs(
          holder1Address,
          holder2Address,
          balance
        );
        expect(await lifContract.balanceOf(holder2Address)).equal(balance);
      });
    });

    describe('#transferFrom(address,address,uint256)', () => {

      it('should throw if paused', async () => {
        let lif = lifContract.connect(deployer);
        await lif.pause();
        lif = lifContract.connect(holder2);
        await expect(lifContract.transferFrom(
          holder1Address,
          holder2Address,
          balance
        )).revertedWith('Pausable: paused');
      });

      it('should throw if tokens not allowed', async () => {
        const lif = lifContract.connect(holder2);
        await expect(lif.transferFrom(
          holder1Address,
          holder2Address,
          balance
        )).revertedWith('ERC20: transfer amount exceeds allowance');
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance.div(2));
        await expect(lif.transferFrom(
          holder1Address,
          holder2Address,
          balance
        )).revertedWith('ERC20: transfer amount exceeds allowance');
      });

      it('should throw if insufficient funds', async () => {
        const lif = lifContract.connect(holder2);
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance);
        await expect(lif.transferFrom(
          holder1Address,
          holder2Address,
          balance.mul(2)
        )).revertedWith('ERC20: transfer amount exceeds balance');
      });

      it('should transfer funds', async () => {
        const lif = lifContract.connect(holder2);
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance);
        const tx = await lif.transferFrom(
          holder1Address,
          holder2Address,
          balance
        );
        expect(tx).to.emit(lifContract, 'Transfer').withArgs(
          holder1Address,
          holder2Address,
          balance
        );
      });
    });

    describe('#allowance(address,address);#approve(address,uint256)', () => {

      it('should return allowance', async () => {
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(0);
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance);
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(balance);
      });
    });

    describe('#increaseAllowance(address,uint256)', () => {

      it('should increase allowance', async () => {
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance.div(2));
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(balance.div(2));
        await lif1.increaseAllowance(holder2Address, balance.div(2));
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(balance);
      });
    });

    describe('#decreaseAllowance(address,uint256)', () => {

      it('should decrease allowance', async () => {
        const lif1 = lifContract.connect(holder1);
        await lif1.approve(holder2Address, balance);
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(balance);
        await lif1.decreaseAllowance(holder2Address, balance.div(2));
        expect(
          await lifContract.allowance(holder1Address, holder2Address)
        ).equal(balance.div(2));
      });
    });
  });
});
