import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';

let customNetworksConfig = {};

if (process.env.NETWORK_RPC_URL && process.env.ACCOUNT_KEY) {
  customNetworksConfig = {
    ropsten: {
      url: process.env.NETWORK_RPC_URL,
      accounts: [
        process.env.ACCOUNT_KEY as string
      ]
    },
    rinkeby: {
      url: process.env.NETWORK_RPC_URL,
      accounts: [
        process.env.ACCOUNT_KEY as string
      ],
      gasPrice: 'auto',
    },
  };
}

// Hardhat config
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      "chainId": 1337,
      "initialBaseFeePerGas": 0
    },
    ...customNetworksConfig
  },
  mocha: {
    timeout: 20000
  }
};

export default config;
