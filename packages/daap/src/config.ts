export interface NetworkConfig {
  name: string;
  chainId: number;
  blockExplorer: string;
}

export interface DappConfig {
  infuraId: string;
  networkId: number;
  networks: NetworkConfig[];
}

if (!process.env.REACT_APP_INFURA_ID) {
  throw new Error('REACT_APP_INFURA_ID must be provided in the ENV');
}

if (!process.env.REACT_APP_NETWORK_ID) {
  throw new Error('REACT_APP_NETWORK_ID must be provided in the ENV');
}

const config: DappConfig = {
  infuraId: process.env.REACT_APP_INFURA_ID,
  networkId: Number(process.env.REACT_APP_NETWORK_ID),
  networks: [
    {
      name: 'hardhat',
      chainId: 1337,
      blockExplorer: ''
    },
    {
      name: 'mainnet',
      chainId: 1,
      blockExplorer: 'https://etherscan.io'
    },
    {
      name: 'ropsten',
      chainId: 3,
      blockExplorer: 'https://ropsten.etherscan.io'
    }
  ]
};

export const getInfuraId = (): string => {
  const infuraId = config.infuraId;
  if (!infuraId) {
    throw new Error('Infura Id not found in the configuration');
  }
  return infuraId;
}

export const getNetworkId = (): number => {
  const networkId = config.networkId;
  if (!networkId) {
    throw new Error('Network Id not found in the configuration');
  }
  return networkId;
}

export const getNetwork = (): NetworkConfig => {
  const networkId = getNetworkId();
  const network = config.networks
    .filter(n => n.chainId === networkId)[0];
  if (!network) {
    throw new Error('Network not found in the configuration');
  }
  return network;
}

export default config;
