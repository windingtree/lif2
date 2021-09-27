/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lif2Test, Lif2TestInterface } from "../Lif2Test";

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
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Resurrect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Started",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Stopped",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "originalLif",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506126ab806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806375f12b21116100de578063a9059cbb11610097578063c4d66de811610071578063c4d66de814610314578063d505accf14610327578063dd62ed3e1461033a578063f2fde38b1461037357600080fd5b8063a9059cbb146102e7578063be9a6555146102fa578063c43b1b471461030257600080fd5b806375f12b21146102795780637ecebe001461028c5780638456cb591461029f5780638da5cb5b146102a757806395d89b41146102cc578063a457c2d7146102d457600080fd5b80633644e5151161014b5780634e71d92d116101255780634e71d92d146102355780635c975abb1461023d57806370a0823114610248578063715018a61461027157600080fd5b80633644e51514610212578063395093511461021a5780633f4ba83a1461022d57600080fd5b806306fdde031461019357806307da68f5146101b1578063095ea7b3146101bb57806318160ddd146101de57806323b872dd146101f0578063313ce56714610203575b600080fd5b61019b610386565b6040516101a89190612522565b60405180910390f35b6101b9610418565b005b6101ce6101c93660046124a1565b610455565b60405190151581526020016101a8565b6035545b6040519081526020016101a8565b6101ce6101fe3660046123f2565b61046b565b604051601281526020016101a8565b6101e2610517565b6101ce6102283660046124a1565b610526565b6101b9610562565b6101b9610594565b60655460ff166101ce565b6101e26102563660046123a4565b6001600160a01b031660009081526033602052604090205490565b6101b961088d565b61016254600160a01b900460ff166101ce565b6101e261029a3660046123a4565b6108c1565b6101b96108e1565b6097546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b61019b610913565b6101ce6102e23660046124a1565b610922565b6101ce6102f53660046124a1565b6109bb565b6101b9610a20565b610162546001600160a01b03166102b4565b6101b96103223660046123a4565b610a52565b6101b961033536600461242e565b610b46565b6101e26103483660046123bf565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101b96103813660046123a4565b610c8c565b6060603680546103959061262a565b80601f01602080910402602001604051908101604052809291908181526020018280546103c19061262a565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b5050505050905090565b6097546001600160a01b0316331461044b5760405162461bcd60e51b8152600401610442906125a3565b60405180910390fd5b610453610d27565b565b6000610462338484610dd0565b50600192915050565b6000610478848484610ef4565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156104fd5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610442565b61050a8533858403610dd0565b60019150505b9392505050565b60006105216110cf565b905090565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909161046291859061055d9086906125d8565b610dd0565b6097546001600160a01b0316331461058c5760405162461bcd60e51b8152600401610442906125a3565b61045361114a565b60026101305414156105e85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610442565b600261013055600033610162546040516370a0823160e01b81526001600160a01b038084166004830152929350600092909116906370a082319060240160206040518083038186803b15801561063d57600080fd5b505afa158015610651573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067591906124ed565b9050600081116106c75760405162461bcd60e51b815260206004820152601b60248201527f436c61696d61626c653a206e6f7468696e6720746f20636c61696d00000000006044820152606401610442565b610162546106e0906001600160a01b03168330846111c4565b610162546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e91906124ed565b156107ab5760405162461bcd60e51b815260206004820152601d60248201527f436c61696d61626c653a20756e61626c6520746f207472616e736665720000006044820152606401610442565b6107b6308383610ef4565b816001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4826040516107f191815260200190565b60405180910390a26001600160a01b038216600090815261016360205260409020548015610882576001600160a01b0383166000908152610163602052604081205561083e308483610ef4565b826001600160a01b03167fa065a6bcbaa96b9d220b93617b9a6602d16a15aa84337912c99fc90e04d13cdb8260405161087991815260200190565b60405180910390a25b505060016101305550565b6097546001600160a01b031633146108b75760405162461bcd60e51b8152600401610442906125a3565b610453600061121e565b6001600160a01b038116600090815260fd60205260408120545b92915050565b6097546001600160a01b0316331461090b5760405162461bcd60e51b8152600401610442906125a3565b610453611270565b6060603780546103959061262a565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156109a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610442565b6109b13385858403610dd0565b5060019392505050565b60006001600160a01b038316301415610a165760405162461bcd60e51b815260206004820152601f60248201527f45524332303a207472616e7366657220746f2074686520636f6e7472616374006044820152606401610442565b61051083836112eb565b6097546001600160a01b03163314610a4a5760405162461bcd60e51b8152600401610442906125a3565b6104536112f8565b600054610100900460ff1680610a6b575060005460ff16155b610a875760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015610aa9576000805461ffff19166101011790555b610aee604051806040016040528060088152602001672634b32a37b5b2b760c11b815250604051806040016040528060038152602001622624a360e91b81525061137c565b610af66113fc565b610afe611477565b610b27604051806040016040528060088152602001672634b32a37b5b2b760c11b8152506114de565b610b3082611569565b8015610b42576000805461ff00191690555b5050565b83421115610b965760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610442565b600060fe54888888610ba78c6116d2565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c02826116fa565b90506000610c1282878787611748565b9050896001600160a01b0316816001600160a01b031614610c755760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610442565b610c808a8a8a610dd0565b50505050505050505050565b6097546001600160a01b03163314610cb65760405162461bcd60e51b8152600401610442906125a3565b6001600160a01b038116610d1b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610442565b610d248161121e565b50565b61016254600160a01b900460ff1615610d775760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd1bdc1c195960721b6044820152606401610442565b610162805460ff60a01b1916600160a01b1790557f55c4adf1f68f084b809304657594a92ba835ada8d3b5340955bf05746723c05b610db33390565b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038316610e325760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610442565b6001600160a01b038216610e935760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610442565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610f585760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610442565b6001600160a01b038216610fba5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610442565b610fc5838383611770565b6001600160a01b0383166000908152603360205260409020548181101561103d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610442565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906110749084906125d8565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110c091815260200190565b60405180910390a35b50505050565b60006105217f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6110fe60c95490565b60ca546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60655460ff166111935760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610442565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610db3565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110c99085906117b6565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60655460ff16156112b65760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610db33390565b6000610462338484610ef4565b61016254600160a01b900460ff166113475760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd185c9d195960721b6044820152606401610442565b610162805460ff60a01b191690557f27029695aa5f602a4ee81f4c32dfa86e562f200a17966496f3a7c3f2ec0f941733610db3565b600054610100900460ff1680611395575060005460ff16155b6113b15760405162461bcd60e51b815260040161044290612555565b600054610100900460ff161580156113d3576000805461ffff19166101011790555b6113db611888565b6113e583836118f2565b80156113f7576000805461ff00191690555b505050565b600054610100900460ff1680611415575060005460ff16155b6114315760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611453576000805461ffff19166101011790555b61145b611888565b611463611987565b8015610d24576000805461ff001916905550565b600054610100900460ff1680611490575060005460ff16155b6114ac5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff161580156114ce576000805461ffff19166101011790555b6114d6611888565b6114636119fc565b600054610100900460ff16806114f7575060005460ff16155b6115135760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611535576000805461ffff19166101011790555b61153d611888565b61156082604051806040016040528060018152602001603160f81b815250611a5c565b610b3082611ae6565b600054610100900460ff1680611582575060005460ff16155b61159e5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff161580156115c0576000805461ffff19166101011790555b6001600160a01b0382166116165760405162461bcd60e51b815260206004820181905260248201527f436c61696d61626c653a20696e76616c696420746f6b656e20616464726573736044820152606401610442565b61016280546001600160a81b0319166001600160a01b03841617905561163a611b76565b6116ca3061016260009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561168d57600080fd5b505afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c591906124ed565b611bd5565b610b30611bdf565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b60006108db6117076110cf565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061175987878787611d69565b9150915061176681611e56565b5095945050505050565b60655460ff16156113f75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b600061180b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166120119092919063ffffffff16565b8051909150156113f7578080602001905181019061182991906124cb565b6113f75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610442565b600054610100900460ff16806118a1575060005460ff16155b6118bd5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611463576000805461ffff19166101011790558015610d24576000805461ff001916905550565b600054610100900460ff168061190b575060005460ff16155b6119275760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611949576000805461ffff19166101011790555b825161195c9060369060208601906122ef565b5081516119709060379060208501906122ef565b5080156113f7576000805461ff0019169055505050565b600054610100900460ff16806119a0575060005460ff16155b6119bc5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff161580156119de576000805461ffff19166101011790555b6065805460ff191690558015610d24576000805461ff001916905550565b600054610100900460ff1680611a15575060005460ff16155b611a315760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611a53576000805461ffff19166101011790555b6114633361121e565b600054610100900460ff1680611a75575060005460ff16155b611a915760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611ab3576000805461ffff19166101011790555b825160208085019190912083519184019190912060c99190915560ca5580156113f7576000805461ff0019169055505050565b600054610100900460ff1680611aff575060005460ff16155b611b1b5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611b3d576000805461ffff19166101011790555b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960fe558015610b42576000805461ff00191690555050565b600054610100900460ff1680611b8f575060005460ff16155b611bab5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611bcd576000805461ffff19166101011790555b611463612028565b610b428282612099565b600054610100900460ff1680611bf8575060005460ff16155b611c145760405162461bcd60e51b815260040161044290612555565b600054610100900460ff16158015611c36576000805461ffff19166101011790555b7370997970c51812dc3a010c7d01b50e0d17dc79c860009081526101636020527fe7b3ce69b131f8c512bc70362a8abe4a5f081e49309955ca3709fda792ab94a98054690214e2a7766d89d800009290611c919084906125d8565b9091555050733c44cdddb6a900fa2b585dd299e03d12fa4293bc60009081526101636020527fd8209803dc5119ab243b31766a0138d39b8881c699dcd8ea72979685497415518054690b02ecf74c31387fedf99290611cf19084906125d8565b90915550507390f79bf6eb2c4f870365e785982e1f101e93b90660009081526101636020527f2fbad6c6db32930ab000296e8f69b4554874996512cbb29cdccae69fc9f32f2880546828b6c5bb47a018cc009290611d509084906125d8565b90915550508015610d24576000805461ff001916905550565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611da05750600090506003611e4d565b8460ff16601b14158015611db857508460ff16601c14155b15611dc95750600090506004611e4d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e1d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e4657600060019250925050611e4d565b9150600090505b94509492505050565b6000816004811115611e6a57611e6a61265f565b1415611e735750565b6001816004811115611e8757611e8761265f565b1415611ed55760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610442565b6002816004811115611ee957611ee961265f565b1415611f375760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610442565b6003816004811115611f4b57611f4b61265f565b1415611fa45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610442565b6004816004811115611fb857611fb861265f565b1415610d245760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610442565b606061202084846000856120a3565b949350505050565b600054610100900460ff1680612041575060005460ff16155b61205d5760405162461bcd60e51b815260040161044290612555565b600054610100900460ff1615801561207f576000805461ffff19166101011790555b6001610130558015610d24576000805461ff001916905550565b610b4282826121cb565b6060824710156121045760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610442565b843b6121525760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610442565b600080866001600160a01b0316858760405161216e9190612506565b60006040518083038185875af1925050503d80600081146121ab576040519150601f19603f3d011682016040523d82523d6000602084013e6121b0565b606091505b50915091506121c08282866122b6565b979650505050505050565b6001600160a01b0382166122215760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610442565b61222d60008383611770565b806035600082825461223f91906125d8565b90915550506001600160a01b0382166000908152603360205260408120805483929061226c9084906125d8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b606083156122c5575081610510565b8251156122d55782518084602001fd5b8160405162461bcd60e51b81526004016104429190612522565b8280546122fb9061262a565b90600052602060002090601f01602090048101928261231d5760008555612363565b82601f1061233657805160ff1916838001178555612363565b82800160010185558215612363579182015b82811115612363578251825591602001919060010190612348565b5061236f929150612373565b5090565b5b8082111561236f5760008155600101612374565b80356001600160a01b038116811461239f57600080fd5b919050565b6000602082840312156123b657600080fd5b61051082612388565b600080604083850312156123d257600080fd5b6123db83612388565b91506123e960208401612388565b90509250929050565b60008060006060848603121561240757600080fd5b61241084612388565b925061241e60208501612388565b9150604084013590509250925092565b600080600080600080600060e0888a03121561244957600080fd5b61245288612388565b965061246060208901612388565b95506040880135945060608801359350608088013560ff8116811461248457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156124b457600080fd5b6124bd83612388565b946020939093013593505050565b6000602082840312156124dd57600080fd5b8151801515811461051057600080fd5b6000602082840312156124ff57600080fd5b5051919050565b600082516125188184602087016125fe565b9190910192915050565b60208152600082518060208401526125418160408501602087016125fe565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156125f957634e487b7160e01b600052601160045260246000fd5b500190565b60005b83811015612619578181015183820152602001612601565b838111156110c95750506000910152565b600181811c9082168061263e57607f821691505b602082108114156116f457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fdfea264697066735822122023ca3f90eae6b667a2cd25b0dc4d871557c036630016c2185bf90c9eef189ca564736f6c63430008070033";

export class Lif2Test__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lif2Test> {
    return super.deploy(overrides || {}) as Promise<Lif2Test>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lif2Test {
    return super.attach(address) as Lif2Test;
  }
  connect(signer: Signer): Lif2Test__factory {
    return super.connect(signer) as Lif2Test__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Lif2TestInterface {
    return new utils.Interface(_abi) as Lif2TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lif2Test {
    return new Contract(address, _abi, signerOrProvider) as Lif2Test;
  }
}
