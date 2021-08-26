export interface NetworkConfig {
  name: string;
  chainId: number;
  blockExplorer: string;
}

export interface ContractsAddresses {
  lif: string;
  lif2: string;
}

export interface DappConfig {
  infuraId: string;
  networkId: number;
  contracts: ContractsAddresses;
  networks: NetworkConfig[];
}

if (!process.env.REACT_APP_INFURA_ID || process.env.REACT_APP_INFURA_ID === '') {
  throw new Error('REACT_APP_INFURA_ID must be provided in the ENV');
}

if (!process.env.REACT_APP_NETWORK_ID || process.env.REACT_APP_NETWORK_ID === '') {
  throw new Error('REACT_APP_NETWORK_ID must be provided in the ENV');
}

if (!process.env.REACT_APP_LIF_ADDRESS || process.env.REACT_APP_LIF_ADDRESS === '') {
  throw new Error('REACT_APP_LIF_ADDRESS must be provided in the ENV');
}

if (!process.env.REACT_APP_LIF2_ADDRESS || process.env.REACT_APP_LIF2_ADDRESS === '') {
  throw new Error('REACT_APP_LIF2_ADDRESS must be provided in the ENV');
}

const config: DappConfig = {
  infuraId: process.env.REACT_APP_INFURA_ID,
  networkId: Number(process.env.REACT_APP_NETWORK_ID),
  contracts: {
    lif: process.env.REACT_APP_LIF_ADDRESS,
    lif2: process.env.REACT_APP_LIF2_ADDRESS
  },
  networks: [
    {
      name: 'localhost',
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
  return config.infuraId;
}

export const getNetworkId = (): number => {
  return config.networkId;
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

export const getContractsAddresses = (): ContractsAddresses => {
  return config.contracts;
};

export default config;
