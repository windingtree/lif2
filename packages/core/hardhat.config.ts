import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';

import networks from '../token/networks.json';

if (!networks) {
  console.log('Unable to load networks config');
}

// Hardhat config
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      ...(
        networks.hardhat
          ? networks.hardhat
          : {
            "chainId": 1337,
            "initialBaseFeePerGas": 0
          }
      )
    },
    ropsten: networks.ropsten
  },
  mocha: {
    timeout: 20000
  }
};

export default config;
