/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lif2, Lif2Interface } from "../Lif2";

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
  "0x608060405234801561001057600080fd5b50612937806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806375f12b21116100de578063a9059cbb11610097578063c4d66de811610071578063c4d66de814610314578063d505accf14610327578063dd62ed3e1461033a578063f2fde38b1461037357600080fd5b8063a9059cbb146102e7578063be9a6555146102fa578063c43b1b471461030257600080fd5b806375f12b21146102795780637ecebe001461028c5780638456cb591461029f5780638da5cb5b146102a757806395d89b41146102cc578063a457c2d7146102d457600080fd5b80633644e5151161014b5780634e71d92d116101255780634e71d92d146102355780635c975abb1461023d57806370a0823114610248578063715018a61461027157600080fd5b80633644e51514610212578063395093511461021a5780633f4ba83a1461022d57600080fd5b806306fdde031461019357806307da68f5146101b1578063095ea7b3146101bb57806318160ddd146101de57806323b872dd146101f0578063313ce56714610203575b600080fd5b61019b610386565b6040516101a891906127ae565b60405180910390f35b6101b9610418565b005b6101ce6101c936600461272d565b610455565b60405190151581526020016101a8565b6035545b6040519081526020016101a8565b6101ce6101fe36600461267e565b61046b565b604051601281526020016101a8565b6101e2610517565b6101ce61022836600461272d565b610526565b6101b9610562565b6101b9610594565b60655460ff166101ce565b6101e2610256366004612630565b6001600160a01b031660009081526033602052604090205490565b6101b9610890565b61016254600160a01b900460ff166101ce565b6101e261029a366004612630565b6108c4565b6101b96108e4565b6097546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b61019b610916565b6101ce6102e236600461272d565b610925565b6101ce6102f536600461272d565b6109be565b6101b9610a19565b610162546001600160a01b03166102b4565b6101b9610322366004612630565b610a4b565b6101b96103353660046126ba565b610b3f565b6101e261034836600461264b565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101b9610381366004612630565b610c85565b606060368054610395906128b6565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906128b6565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b5050505050905090565b6097546001600160a01b0316331461044b5760405162461bcd60e51b81526004016104429061282f565b60405180910390fd5b610453610d20565b565b6000610462338484610dc9565b50600192915050565b6000610478848484610eed565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156104fd5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610442565b61050a8533858403610dc9565b60019150505b9392505050565b60006105216110c8565b905090565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909161046291859061055d908690612864565b610dc9565b6097546001600160a01b0316331461058c5760405162461bcd60e51b81526004016104429061282f565b610453611143565b60026101305414156105e85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610442565b600261013055600033610162546040516370a0823160e01b81526001600160a01b038084166004830152929350600092909116906370a082319060240160206040518083038186803b15801561063d57600080fd5b505afa158015610651573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106759190612779565b9050600081116106c75760405162461bcd60e51b815260206004820152601b60248201527f436c61696d61626c653a206e6f7468696e6720746f20636c61696d00000000006044820152606401610442565b610162546106e0906001600160a01b03168330846111bd565b610162546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b15801561072657600080fd5b505afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e9190612779565b156107ab5760405162461bcd60e51b815260206004820152601d60248201527f436c61696d61626c653a20756e61626c6520746f207472616e736665720000006044820152606401610442565b6107b6308383610eed565b816001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4826040516107f191815260200190565b60405180910390a26001600160a01b0382166000908152610163602052604090205415610886576001600160a01b0382166000908152610163602052604081208054919055610841308483610eed565b826001600160a01b03167fa065a6bcbaa96b9d220b93617b9a6602d16a15aa84337912c99fc90e04d13cdb8260405161087c91815260200190565b60405180910390a2505b5050600161013055565b6097546001600160a01b031633146108ba5760405162461bcd60e51b81526004016104429061282f565b6104536000611217565b6001600160a01b038116600090815260fd60205260408120545b92915050565b6097546001600160a01b0316331461090e5760405162461bcd60e51b81526004016104429061282f565b610453611269565b606060378054610395906128b6565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156109a75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610442565b6109b43385858403610dc9565b5060019392505050565b6000823b15610a0f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a207472616e7366657220746f2074686520636f6e7472616374006044820152606401610442565b61051083836112e4565b6097546001600160a01b03163314610a435760405162461bcd60e51b81526004016104429061282f565b6104536112f1565b600054610100900460ff1680610a64575060005460ff16155b610a805760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015610aa2576000805461ffff19166101011790555b610ae7604051806040016040528060088152602001672634b32a37b5b2b760c11b815250604051806040016040528060038152602001622624a360e91b815250611375565b610aef6113f5565b610af7611470565b610b20604051806040016040528060088152602001672634b32a37b5b2b760c11b8152506114d7565b610b2982611562565b8015610b3b576000805461ff00191690555b5050565b83421115610b8f5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610442565b600060fe54888888610ba08c6116cb565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610bfb826116f3565b90506000610c0b82878787611741565b9050896001600160a01b0316816001600160a01b031614610c6e5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610442565b610c798a8a8a610dc9565b50505050505050505050565b6097546001600160a01b03163314610caf5760405162461bcd60e51b81526004016104429061282f565b6001600160a01b038116610d145760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610442565b610d1d81611217565b50565b61016254600160a01b900460ff1615610d705760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd1bdc1c195960721b6044820152606401610442565b610162805460ff60a01b1916600160a01b1790557f55c4adf1f68f084b809304657594a92ba835ada8d3b5340955bf05746723c05b610dac3390565b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038316610e2b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610442565b6001600160a01b038216610e8c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610442565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610f515760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610442565b6001600160a01b038216610fb35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610442565b610fbe838383611769565b6001600160a01b038316600090815260336020526040902054818110156110365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610442565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929061106d908490612864565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110b991815260200190565b60405180910390a35b50505050565b60006105217f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6110f760c95490565b60ca546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60655460ff1661118c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610442565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610dac565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110c29085906117af565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60655460ff16156112af5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610dac3390565b6000610462338484610eed565b61016254600160a01b900460ff166113405760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd185c9d195960721b6044820152606401610442565b610162805460ff60a01b191690557f27029695aa5f602a4ee81f4c32dfa86e562f200a17966496f3a7c3f2ec0f941733610dac565b600054610100900460ff168061138e575060005460ff16155b6113aa5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff161580156113cc576000805461ffff19166101011790555b6113d4611881565b6113de83836118eb565b80156113f0576000805461ff00191690555b505050565b600054610100900460ff168061140e575060005460ff16155b61142a5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff1615801561144c576000805461ffff19166101011790555b611454611881565b61145c611980565b8015610d1d576000805461ff001916905550565b600054610100900460ff1680611489575060005460ff16155b6114a55760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff161580156114c7576000805461ffff19166101011790555b6114cf611881565b61145c6119f5565b600054610100900460ff16806114f0575060005460ff16155b61150c5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff1615801561152e576000805461ffff19166101011790555b611536611881565b61155982604051806040016040528060018152602001603160f81b815250611a55565b610b2982611adf565b600054610100900460ff168061157b575060005460ff16155b6115975760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff161580156115b9576000805461ffff19166101011790555b6001600160a01b03821661160f5760405162461bcd60e51b815260206004820181905260248201527f436c61696d61626c653a20696e76616c696420746f6b656e20616464726573736044820152606401610442565b61016280546001600160a81b0319166001600160a01b038416179055611633611b6f565b6116c33061016260009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561168657600080fd5b505afa15801561169a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116be9190612779565b611bce565b610b29611bd8565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b60006108de6117006110c8565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061175287878787611ff5565b9150915061175f816120e2565b5095945050505050565b60655460ff16156113f05760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610442565b6000611804826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661229d9092919063ffffffff16565b8051909150156113f057808060200190518101906118229190612757565b6113f05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610442565b600054610100900460ff168061189a575060005460ff16155b6118b65760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff1615801561145c576000805461ffff19166101011790558015610d1d576000805461ff001916905550565b600054610100900460ff1680611904575060005460ff16155b6119205760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611942576000805461ffff19166101011790555b825161195590603690602086019061257b565b50815161196990603790602085019061257b565b5080156113f0576000805461ff0019169055505050565b600054610100900460ff1680611999575060005460ff16155b6119b55760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff161580156119d7576000805461ffff19166101011790555b6065805460ff191690558015610d1d576000805461ff001916905550565b600054610100900460ff1680611a0e575060005460ff16155b611a2a5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611a4c576000805461ffff19166101011790555b61145c33611217565b600054610100900460ff1680611a6e575060005460ff16155b611a8a5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611aac576000805461ffff19166101011790555b825160208085019190912083519184019190912060c99190915560ca5580156113f0576000805461ff0019169055505050565b600054610100900460ff1680611af8575060005460ff16155b611b145760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611b36576000805461ffff19166101011790555b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960fe558015610b3b576000805461ff00191690555050565b600054610100900460ff1680611b88575060005460ff16155b611ba45760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611bc6576000805461ffff19166101011790555b61145c6122b4565b610b3b8282612325565b600054610100900460ff1680611bf1575060005460ff16155b611c0d5760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff16158015611c2f576000805461ffff19166101011790555b739067ae747976631d6194311f6cf6fd83a561b0c960009081526101636020527f9cf969c240a3d863413abb2b5686e082f605aa5d13c523f8c33d57afb6ca54a48054690214e2a7766d89d800009290611c8a908490612864565b909155505073415df4ef8f2e4afaebd99ec1d49b05a220ac367360009081526101636020527f6e9a2f9d3764c94fcda89a7be83401543628f8e0541b31bfb0325316b83c45cc8054690b02ecf74c31387fedf99290611cea908490612864565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101636020527f3b236c3cc8b75323fcfda9ae626dd9266c58d27d6f7f28b849a0591d9160686880546828b6c5bb47a018cc009290611d49908490612864565b909155505073b91e2071762e2825d3ec7513304b7f833be32d4860009081526101636020527ff64db07b09ddd9f8a7cf0b6273857c1d5fb68b81bb60eba9d23325ed3456f9cd80546127109290611da1908490612864565b90915550507372ba03f175420890d18423500f0c6b1f2b3e821d60009081526101636020527fa82e8f5d2389b5f5b01d36ab35f251a2b7039e0251d7d8bdff94656b7168384180546901117d708271c5b400009290611e01908490612864565b909155505073692306857d17a8f31bb5feb17cfe765773487e6660009081526101636020527f9892767dcc6f39d45a05036903f5a396e2cad2bdc90e81ea1335875b137053348054680a14c14b39cdf780009290611e60908490612864565b909155505073a7f660812022155ada962f54d2c289c5592f518a60009081526101636020527fd9581a4c94f6917ea7d40cf8ad0656f6290baee0d53733571f39d912f00891bf8054681b1ae4d6e2ef5000009290611ebf908490612864565b9091555050738adbf5f4f80319cfbe8d49976aad9aacc158b4b860009081526101636020527f17b032d0e156f8cce42129fd4895a15ad617683098798c4acf50528787337e8f805468a55740b8684d6800009290611f1e908490612864565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101636020527f3b236c3cc8b75323fcfda9ae626dd9266c58d27d6f7f28b849a0591d91606868805468022b1c8c1227a000009290611f7d908490612864565b90915550507377928bbe911befe4bd4e5d6a6c6d1b7ca58eab6e60009081526101636020527f3e9583b01bddc49c7ce2d1e8ec749f36f847b8571f72e69edbd8afd183ad17bb8054681043561a88293000009290611fdc908490612864565b90915550508015610d1d576000805461ff001916905550565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561202c57506000905060036120d9565b8460ff16601b1415801561204457508460ff16601c14155b1561205557506000905060046120d9565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156120a9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166120d2576000600192509250506120d9565b9150600090505b94509492505050565b60008160048111156120f6576120f66128eb565b14156120ff5750565b6001816004811115612113576121136128eb565b14156121615760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610442565b6002816004811115612175576121756128eb565b14156121c35760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610442565b60038160048111156121d7576121d76128eb565b14156122305760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610442565b6004816004811115612244576122446128eb565b1415610d1d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610442565b60606122ac848460008561232f565b949350505050565b600054610100900460ff16806122cd575060005460ff16155b6122e95760405162461bcd60e51b8152600401610442906127e1565b600054610100900460ff1615801561230b576000805461ffff19166101011790555b6001610130558015610d1d576000805461ff001916905550565b610b3b8282612457565b6060824710156123905760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610442565b843b6123de5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610442565b600080866001600160a01b031685876040516123fa9190612792565b60006040518083038185875af1925050503d8060008114612437576040519150601f19603f3d011682016040523d82523d6000602084013e61243c565b606091505b509150915061244c828286612542565b979650505050505050565b6001600160a01b0382166124ad5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610442565b6124b960008383611769565b80603560008282546124cb9190612864565b90915550506001600160a01b038216600090815260336020526040812080548392906124f8908490612864565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60608315612551575081610510565b8251156125615782518084602001fd5b8160405162461bcd60e51b815260040161044291906127ae565b828054612587906128b6565b90600052602060002090601f0160209004810192826125a957600085556125ef565b82601f106125c257805160ff19168380011785556125ef565b828001600101855582156125ef579182015b828111156125ef5782518255916020019190600101906125d4565b506125fb9291506125ff565b5090565b5b808211156125fb5760008155600101612600565b80356001600160a01b038116811461262b57600080fd5b919050565b60006020828403121561264257600080fd5b61051082612614565b6000806040838503121561265e57600080fd5b61266783612614565b915061267560208401612614565b90509250929050565b60008060006060848603121561269357600080fd5b61269c84612614565b92506126aa60208501612614565b9150604084013590509250925092565b600080600080600080600060e0888a0312156126d557600080fd5b6126de88612614565b96506126ec60208901612614565b95506040880135945060608801359350608088013560ff8116811461271057600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561274057600080fd5b61274983612614565b946020939093013593505050565b60006020828403121561276957600080fd5b8151801515811461051057600080fd5b60006020828403121561278b57600080fd5b5051919050565b600082516127a481846020870161288a565b9190910192915050565b60208152600082518060208401526127cd81604085016020870161288a565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561288557634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156128a557818101518382015260200161288d565b838111156110c25750506000910152565b600181811c908216806128ca57607f821691505b602082108114156116ed57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220dd9c17566144b00c57d31df623f49bba1c5f4de699bbaebda2b1d7f77742cbdd64736f6c63430008070033";

export class Lif2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lif2> {
    return super.deploy(overrides || {}) as Promise<Lif2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lif2 {
    return super.attach(address) as Lif2;
  }
  connect(signer: Signer): Lif2__factory {
    return super.connect(signer) as Lif2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Lif2Interface {
    return new utils.Interface(_abi) as Lif2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lif2 {
    return new Contract(address, _abi, signerOrProvider) as Lif2;
  }
}
