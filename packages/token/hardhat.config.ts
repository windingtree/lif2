import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'solidity-coverage';
import './scripts/lif2tasks';

import networks from './networks.json';

if (!networks) {
  console.log('Unable to load networks config');
}

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
      ...(
        networks.hardhat
          ? networks.hardhat
          : {
            "initialBaseFeePerGas": 0
          }
      )
    },
    ropsten: networks.ropsten
  },
  etherscan: networks.etherscan,
  mocha: {
    timeout: 20000
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true
  }
};

export default config;
