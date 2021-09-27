import type { Signer } from 'ethers';
import { BigNumber as BN } from 'ethers';
import hre from 'hardhat';
const utils = hre.ethers.utils;

export const stuckBalances = {
  '0x70997970C51812dc3A010C7d01b50e0d17dc79C8': BN.from('9830000000000000000000'),
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC': BN.from('51999999999999999995385'),
  '0x90F79bf6EB2c4f870365E785982E1f101E93b906': BN.from('751039901550000000000')
};

export interface StuckBalances {
  [k: string]: any
}

export const prepareOldLif = async (
  signer: Signer,
  holders: string[] = [],
  stuckBalances: StuckBalances
) => {
  const OldLifTest = await hre.ethers.getContractFactory('OldLifTest');
  const instance = await OldLifTest.connect(signer).deploy();
  await instance.deployed();

  if (holders.length > 0) {
    for (let holder of holders) {
      await instance.mint(holder, utils.parseUnits('100', 'gwei'));
    }
  }

  // Initialize stuck balance
  for (let addr in stuckBalances) {
    await instance.mint(instance.address, stuckBalances[addr]);
  }

  return instance;
};
