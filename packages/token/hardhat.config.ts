import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import "@nomiclabs/hardhat-etherscan";
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-docgen';
import './scripts/lif2tasks';

export interface CustomHardhatConfig extends HardhatUserConfig {
  etherscan: {
    apiKey: string;
  }
}

// Hardhat config
const config: CustomHardhatConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      "chainId": 1337,
      "initialBaseFeePerGas": 0
    },
    ropsten: {
      url: process.env.NETWORK_RPC_URL,
      accounts: [
        process.env.ACCOUNT_KEY as string
      ]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY as string
  } ,
  mocha: {
    timeout: 20000
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  }
};

export default config;
