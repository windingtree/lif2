import Lif2ContractJson from './artifacts/contracts/Lif2.sol/Lif2.json';
import deploymentRopsten from './.openzeppelin/ropsten.json';

export const Lif2Contract = Lif2ContractJson;
export const Lif2ContractAbi = Lif2Contract.abi;
export const proxy = {
  ropsten: deploymentRopsten.proxies[0]
};
