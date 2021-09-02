import type { Signer, BigNumber } from 'ethers';
import { task } from 'hardhat/config';
import ERC20Contract from '@windingtree/lif2-token/artifacts/contracts/OldLifTest.sol/OldLifTest.json';
import Lif2Contract from '@windingtree/lif2-token/artifacts/contracts/Lif2.sol/Lif2.json';

export interface HoldersList {
  addresses: string[];
  balances: BigNumber[];
}

// Create holders list
const createHoldersList = async (
  signers: Signer[],
  count: number,
  balance: BigNumber
) => {
  const list: HoldersList = {
    addresses: [],
    balances: []
  };
  for (let i=1; i<=count; i++) {
    const address = await signers[i].getAddress();
    list.addresses.push(address);
    list.balances.push(balance);
  }
  return list;
};

export const setupOldLif = async (
  hre: any,
  deployer: Signer,
  holders: string[] = [],
  balances: BigNumber[] = []
): Promise<string> => {
  const factory = new hre.ethers.ContractFactory(
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
  hre: any,
  deployer: Signer,
  oldLifAddress: string
): Promise<string> => {
  const factory = new hre.ethers.ContractFactory(
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

// Deployment task
task('testSetup', 'Deploys the token')
  .setAction(async (_, hre) => {
    const signers: Signer[] = await hre.ethers.getSigners();
    const deployer: Signer = signers[0];
    const defaultBalance = hre.ethers.utils.parseUnits('100', 'ether');
    const holdersList = await createHoldersList(signers, 5, defaultBalance);
    const oldLifAddress = await setupOldLif(
      hre,
      deployer,
      holdersList.addresses,
      holdersList.balances
    );
    console.log('Old lif address:', oldLifAddress);
    const lif2Address = await setupLif2(hre, deployer, oldLifAddress);
    console.log('New lif2 address:', lif2Address);
  });

  task('ropstenSetup', 'Deploys tokens to Ropsten network')
    .setAction(async (_, hre) => {
      try {
        const signers: Signer[] = await hre.ethers.getSigners();
        const deployer: Signer = signers[0];
        const formatValue = (value: string): BigNumber =>
          hre.ethers.utils.parseUnits(value, 'ether');
        const holdersList = {
          addresses: [
            '0x567Eb9E8D8A43C24c7bac4cb4b51ca806cFE8996', // me
            '0x0bb476Cc44b32eC1B7DBF93F57A984764F7246C8', // me
            '0xA0B74BFE28223c9e08d6DBFa74B5bf4Da763f959', // me
            '0x8db4FDd5FD446bB2f1C821A727ccb6d9e619E935', // m
            '0x9253AA6cce96b2D02C25532a2522142185FAee94', // m
            '0x59E538652207D9A6a93c6C29c32e8c749F35981D', // p
          ],
          balances: [
            formatValue('1234567'),
            formatValue('1000000000'),
            formatValue('765'),
            formatValue('654'),
            formatValue('987'),
            formatValue('876'),
          ]
        };
        if (holdersList.addresses.length !== holdersList.balances.length) {
          throw new Error('Broken holders list');
        }
        const oldLifAddress = await setupOldLif(
          hre,
          deployer,
          holdersList.addresses,
          holdersList.balances
        );
        console.log('Old lif address:', oldLifAddress);
        const lif2Address = await setupLif2(hre, deployer, oldLifAddress);
        console.log('New lif2 address:', lif2Address);
      } catch (error) {
        console.log(error);
      }
    });
