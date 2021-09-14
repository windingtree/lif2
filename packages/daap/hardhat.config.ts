import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import './scripts/testSetup';

// Hardhat config
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      "chainId": 1337,
      "initialBaseFeePerGas": 0
    }
  },
  mocha: {
    timeout: 20000
  }
};

export default config;
