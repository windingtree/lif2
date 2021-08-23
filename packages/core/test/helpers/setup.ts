import type { Signer, BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import ERC20Contract from '@windingtree/lif2-token/artifacts/contracts/OldLifTest.sol/OldLifTest.json';
import Lif2Contract from '@windingtree/lif2-token/artifacts/contracts/Lif2.sol/Lif2.json';

export const setupOldLif = async (
  deployer: Signer,
  holders: string[] = [],
  balances: BigNumber[] = []
): Promise<string> => {
  const factory = new ethers.ContractFactory(
    ERC20Contract.abi,
    ERC20Contract.bytecode,
    deployer
  );
  const contract = await factory.deploy();
  await contract.deployTransaction.wait();

  if (holders.length > 0) {
    for (let i=0; i < holders.length; i++) {
      await contract.mint(
        holders[i],
        balances[i]
      );
    }
  }

  return contract.address;
};

// Helper for the new Lif contract setup
export const setupLif2 = async (
  deployer: Signer,
  oldLifAddress: string
): Promise<string> => {
  const factory = new ethers.ContractFactory(
    Lif2Contract.abi,
    Lif2Contract.bytecode,
    deployer
  );
  const contract = await factory.deploy();
  await contract.deployTransaction.wait();
  const tx = await contract.initialize(oldLifAddress);
  await tx.wait();
  return contract.address;
};
