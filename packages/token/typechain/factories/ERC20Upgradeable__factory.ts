/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../ERC20Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e49565b60405180910390f35b6100e660048036038101906100e19190610c93565b610308565b6040516100f39190610e2e565b60405180910390f35b610104610326565b6040516101119190610f4b565b60405180910390f35b610134600480360381019061012f9190610c40565b610330565b6040516101419190610e2e565b60405180910390f35b610152610428565b60405161015f9190610f66565b60405180910390f35b610182600480360381019061017d9190610c93565b610431565b60405161018f9190610e2e565b60405180910390f35b6101b260048036038101906101ad9190610bd3565b6104dd565b6040516101bf9190610f4b565b60405180910390f35b6101d0610526565b6040516101dd9190610e49565b60405180910390f35b61020060048036038101906101fb9190610c93565b6105b8565b60405161020d9190610e2e565b60405180910390f35b610230600480360381019061022b9190610c93565b6106a3565b60405161023d9190610e2e565b60405180910390f35b610260600480360381019061025b9190610c00565b6106c1565b60405161026d9190610f4b565b60405180910390f35b6060603680546102859061107b565b80601f01602080910402602001604051908101604052809291908181526020018280546102b19061107b565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610748565b8484610750565b6001905092915050565b6000603554905090565b600061033d84848461091b565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610ecb565b60405180910390fd5b61041c85610414610748565b858403610750565b60019150509392505050565b60006012905090565b60006104d361043e610748565b84846034600061044c610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ce9190610f9d565b610750565b6001905092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546105359061107b565b80601f01602080910402602001604051908101604052809291908181526020018280546105619061107b565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b5050505050905090565b600080603460006105c7610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067b90610f2b565b60405180910390fd5b61069861068f610748565b85858403610750565b600191505092915050565b60006106b76106b0610748565b848461091b565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b790610f0b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790610e8b565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090e9190610f4b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098290610eeb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f290610e6b565b60405180910390fd5b610a06838383610b9f565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8490610eab565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b229190610f9d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b869190610f4b565b60405180910390a3610b99848484610ba4565b50505050565b505050565b505050565b600081359050610bb88161134a565b92915050565b600081359050610bcd81611361565b92915050565b600060208284031215610be957610be861110b565b5b6000610bf784828501610ba9565b91505092915050565b60008060408385031215610c1757610c1661110b565b5b6000610c2585828601610ba9565b9250506020610c3685828601610ba9565b9150509250929050565b600080600060608486031215610c5957610c5861110b565b5b6000610c6786828701610ba9565b9350506020610c7886828701610ba9565b9250506040610c8986828701610bbe565b9150509250925092565b60008060408385031215610caa57610ca961110b565b5b6000610cb885828601610ba9565b9250506020610cc985828601610bbe565b9150509250929050565b610cdc81611005565b82525050565b6000610ced82610f81565b610cf78185610f8c565b9350610d07818560208601611048565b610d1081611110565b840191505092915050565b6000610d28602383610f8c565b9150610d3382611121565b604082019050919050565b6000610d4b602283610f8c565b9150610d5682611170565b604082019050919050565b6000610d6e602683610f8c565b9150610d79826111bf565b604082019050919050565b6000610d91602883610f8c565b9150610d9c8261120e565b604082019050919050565b6000610db4602583610f8c565b9150610dbf8261125d565b604082019050919050565b6000610dd7602483610f8c565b9150610de2826112ac565b604082019050919050565b6000610dfa602583610f8c565b9150610e05826112fb565b604082019050919050565b610e1981611031565b82525050565b610e288161103b565b82525050565b6000602082019050610e436000830184610cd3565b92915050565b60006020820190508181036000830152610e638184610ce2565b905092915050565b60006020820190508181036000830152610e8481610d1b565b9050919050565b60006020820190508181036000830152610ea481610d3e565b9050919050565b60006020820190508181036000830152610ec481610d61565b9050919050565b60006020820190508181036000830152610ee481610d84565b9050919050565b60006020820190508181036000830152610f0481610da7565b9050919050565b60006020820190508181036000830152610f2481610dca565b9050919050565b60006020820190508181036000830152610f4481610ded565b9050919050565b6000602082019050610f606000830184610e10565b92915050565b6000602082019050610f7b6000830184610e1f565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fa882611031565b9150610fb383611031565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fe857610fe76110ad565b5b828201905092915050565b6000610ffe82611011565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561106657808201518184015260208101905061104b565b83811115611075576000848401525b50505050565b6000600282049050600182168061109357607f821691505b602082108114156110a7576110a66110dc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61135381610ff3565b811461135e57600080fd5b50565b61136a81611031565b811461137557600080fd5b5056fea264697066735822122070fe4472c15fa65b1d14268af9d6342fa739e728368dfda66b08415a341d2b5464736f6c63430008070033";

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}
