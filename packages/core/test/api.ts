import type { Signer, BigNumber } from 'ethers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { before } from 'mocha';
import { setupOldLif, setupLif2 } from './helpers/setup';
import { Lif2Token } from '../src';

describe('API tests', () => {
  let signers: Signer[];
  let deployer: Signer;
  let holder1: Signer;
  let deployerAddress: string;
  let holder1Address: string;
  let oldLifAddress: any;
  let lif2Address: string;
  let defaultBalance: BigNumber;
  let totalSupply: BigNumber;
  let lif2Token;

  before(async () => {
    signers = await ethers.getSigners();
    deployer = signers[0];
    holder1 = signers[1];
    deployerAddress = await deployer.getAddress();
    holder1Address = await holder1.getAddress();
    defaultBalance = ethers.utils.parseUnits('100', 'gwei');
    oldLifAddress = await setupOldLif(
      deployer,
      [holder1Address],
      [defaultBalance]
    );
    totalSupply = defaultBalance;
    lif2Address = await setupLif2(deployer, oldLifAddress);
    lif2Token = new Lif2Token(
      oldLifAddress,
      lif2Address,
      ethers.provider
    );
  });

  describe('#totalSupplyOld', () => {

    it('should return total supply from the OLD contract', async () => {
      expect(await lif2Token.totalSupplyOld()).equal(totalSupply);
    });
  });

  describe('#oldBalanceOf', () => {

    it('should return balance of the account on the OLD contract', async () => {
      expect(await lif2Token.balanceOfOld(holder1Address)).equal(defaultBalance);
    });
  });

  describe('#approveAllOld', () => {

    it('should approve all tokens from OLD contract', async () => {
      let approveTx;
      const {
        holder,
        value,
        tx
      } = await lif2Token.approveAllOld(
        holder1,
        tx => {
          approveTx = tx;
        }
      );
      expect(holder).equal(holder1Address);
      expect(value).equal(defaultBalance);
      expect(approveTx.transactionHash).equal(tx.transactionHash);
    });
  });

  describe('#allowanceOld', () => {

    it('should return allowance', async () => {
      expect(await lif2Token.allowanceOld(holder1Address, lif2Address))
        .equal(defaultBalance);
    });
  });

  describe('#totalSupply', () => {

    it('should return total supply from the NEW contract', async () => {
      expect(await lif2Token.totalSupply()).equal(totalSupply);
    });
  });

  describe('#claim', () => {

    it('should claim tokens', async () => {
      let claimTx;
      const {
        holder,
        claimed,
        tx
      } = await lif2Token.claim(
        holder1,
        tx => {
          claimTx = tx;
        }
      );
      expect(holder).equal(holder1Address);
      expect(claimed).equal(defaultBalance);
      expect(claimTx.transactionHash).equal(tx.transactionHash);
    });
  });

  describe('#balanceOf', () => {

    it('should return balance of the account on the NEW contract', async () => {
      expect(await lif2Token.balanceOf(holder1Address)).equal(defaultBalance);
    });
  });

  describe('#isStopped', () => {

    it('should return stopped status', async () => {
      expect(await lif2Token.isStopped()).equal(false);
    });
  });
});
