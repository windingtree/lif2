/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lif2V3, Lif2V3Interface } from "../Lif2V3";

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
  "0x608060405234801561001057600080fd5b50612956806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806375f12b21116100de578063a9059cbb11610097578063c4d66de811610071578063c4d66de814610327578063d505accf1461033a578063dd62ed3e1461034d578063f2fde38b1461038657600080fd5b8063a9059cbb146102fa578063be9a65551461030d578063c43b1b471461031557600080fd5b806375f12b211461028c5780637ecebe001461029f5780638456cb59146102b25780638da5cb5b146102ba57806395d89b41146102df578063a457c2d7146102e757600080fd5b80633644e5151161014b5780634e71d92d116101255780634e71d92d146102485780635c975abb1461025057806370a082311461025b578063715018a61461028457600080fd5b80633644e51514610225578063395093511461022d5780633f4ba83a1461024057600080fd5b806306fdde031461019357806307da68f5146101c4578063095ea7b3146101ce57806318160ddd146101f157806323b872dd14610203578063313ce56714610216575b600080fd5b6040805180820190915260038152622634b360e91b60208201525b6040516101bb91906127cd565b60405180910390f35b6101cc610399565b005b6101e16101dc36600461274c565b6103d6565b60405190151581526020016101bb565b6035545b6040519081526020016101bb565b6101e161021136600461269d565b6103ec565b604051601281526020016101bb565b6101f5610498565b6101e161023b36600461274c565b6104a7565b6101cc6104e3565b6101cc610515565b60655460ff166101e1565b6101f561026936600461264f565b6001600160a01b031660009081526033602052604090205490565b6101cc61080e565b61016254600160a01b900460ff166101e1565b6101f56102ad36600461264f565b610842565b6101cc610862565b6097546001600160a01b03165b6040516001600160a01b0390911681526020016101bb565b6101ae610894565b6101e16102f536600461274c565b610926565b6101e161030836600461274c565b6109bf565b6101cc610a25565b610162546001600160a01b03166102c7565b6101cc61033536600461264f565b610a57565b6101cc6103483660046126d9565b610b4b565b6101f561035b36600461266a565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101cc61039436600461264f565b610c91565b6097546001600160a01b031633146103cc5760405162461bcd60e51b81526004016103c39061284e565b60405180910390fd5b6103d4610d2c565b565b60006103e3338484610dd5565b50600192915050565b60006103f9848484610ef9565b6001600160a01b03841660009081526034602090815260408083203384529091529020548281101561047e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084016103c3565b61048b8533858403610dd5565b60019150505b9392505050565b60006104a26110d4565b905090565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916103e39185906104de908690612883565b610dd5565b6097546001600160a01b0316331461050d5760405162461bcd60e51b81526004016103c39061284e565b6103d461116f565b60026101305414156105695760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103c3565b600261013055600033610162546040516370a0823160e01b81526001600160a01b038084166004830152929350600092909116906370a082319060240160206040518083038186803b1580156105be57600080fd5b505afa1580156105d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f69190612798565b9050600081116106485760405162461bcd60e51b815260206004820152601b60248201527f436c61696d61626c653a206e6f7468696e6720746f20636c61696d000000000060448201526064016103c3565b61016254610661906001600160a01b03168330846111e9565b610162546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b1580156106a757600080fd5b505afa1580156106bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106df9190612798565b1561072c5760405162461bcd60e51b815260206004820152601d60248201527f436c61696d61626c653a20756e61626c6520746f207472616e7366657200000060448201526064016103c3565b610737308383610ef9565b816001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d48260405161077291815260200190565b60405180910390a26001600160a01b038216600090815261016360205260409020548015610803576001600160a01b038316600090815261016360205260408120556107bf308483610ef9565b826001600160a01b03167fa065a6bcbaa96b9d220b93617b9a6602d16a15aa84337912c99fc90e04d13cdb826040516107fa91815260200190565b60405180910390a25b505060016101305550565b6097546001600160a01b031633146108385760405162461bcd60e51b81526004016103c39061284e565b6103d46000611243565b6001600160a01b038116600090815260fd60205260408120545b92915050565b6097546001600160a01b0316331461088c5760405162461bcd60e51b81526004016103c39061284e565b6103d4611295565b6060603780546108a3906128d5565b80601f01602080910402602001604051908101604052809291908181526020018280546108cf906128d5565b801561091c5780601f106108f15761010080835404028352916020019161091c565b820191906000526020600020905b8154815290600101906020018083116108ff57829003601f168201915b5050505050905090565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156109a85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103c3565b6109b53385858403610dd5565b5060019392505050565b60006001600160a01b038316301415610a1a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a207472616e7366657220746f2074686520636f6e74726163740060448201526064016103c3565b6103e3338484610ef9565b6097546001600160a01b03163314610a4f5760405162461bcd60e51b81526004016103c39061284e565b6103d4611310565b600054610100900460ff1680610a70575060005460ff16155b610a8c5760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015610aae576000805461ffff19166101011790555b610af3604051806040016040528060088152602001672634b32a37b5b2b760c11b815250604051806040016040528060038152602001622624a360e91b815250611394565b610afb611414565b610b0361148f565b610b2c604051806040016040528060088152602001672634b32a37b5b2b760c11b8152506114f6565b610b3582611581565b8015610b47576000805461ff00191690555b5050565b83421115610b9b5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016103c3565b600060fe54888888610bac8c6116ea565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c0782611712565b90506000610c1782878787611760565b9050896001600160a01b0316816001600160a01b031614610c7a5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016103c3565b610c858a8a8a610dd5565b50505050505050505050565b6097546001600160a01b03163314610cbb5760405162461bcd60e51b81526004016103c39061284e565b6001600160a01b038116610d205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103c3565b610d2981611243565b50565b61016254600160a01b900460ff1615610d7c5760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd1bdc1c195960721b60448201526064016103c3565b610162805460ff60a01b1916600160a01b1790557f55c4adf1f68f084b809304657594a92ba835ada8d3b5340955bf05746723c05b610db83390565b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038316610e375760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103c3565b6001600160a01b038216610e985760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103c3565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610f5d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103c3565b6001600160a01b038216610fbf5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103c3565b610fca838383611788565b6001600160a01b038316600090815260336020526040902054818110156110425760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103c3565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611079908490612883565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110c591815260200190565b60405180910390a35b50505050565b60408051808201825260038152622634b360e91b60209182015260ca5482517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818401527f6d41db7a2cd9cb4853266f642d486724d0e4c4c26ab8d82a19f585ad99ac6cae8185015260608101919091524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b60655460ff166111b85760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103c3565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610db8565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110ce9085906117ce565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60655460ff16156112db5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103c3565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610db83390565b61016254600160a01b900460ff1661135f5760405162461bcd60e51b815260206004820152601260248201527110db185a5b58589b194e881cdd185c9d195960721b60448201526064016103c3565b610162805460ff60a01b191690557f27029695aa5f602a4ee81f4c32dfa86e562f200a17966496f3a7c3f2ec0f941733610db8565b600054610100900460ff16806113ad575060005460ff16155b6113c95760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff161580156113eb576000805461ffff19166101011790555b6113f36118a0565b6113fd838361190a565b801561140f576000805461ff00191690555b505050565b600054610100900460ff168061142d575060005460ff16155b6114495760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff1615801561146b576000805461ffff19166101011790555b6114736118a0565b61147b61199f565b8015610d29576000805461ff001916905550565b600054610100900460ff16806114a8575060005460ff16155b6114c45760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff161580156114e6576000805461ffff19166101011790555b6114ee6118a0565b61147b611a14565b600054610100900460ff168061150f575060005460ff16155b61152b5760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff1615801561154d576000805461ffff19166101011790555b6115556118a0565b61157882604051806040016040528060018152602001603160f81b815250611a74565b610b3582611afe565b600054610100900460ff168061159a575060005460ff16155b6115b65760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff161580156115d8576000805461ffff19166101011790555b6001600160a01b03821661162e5760405162461bcd60e51b815260206004820181905260248201527f436c61696d61626c653a20696e76616c696420746f6b656e206164647265737360448201526064016103c3565b61016280546001600160a81b0319166001600160a01b038416179055611652611b8e565b6116e23061016260009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116a557600080fd5b505afa1580156116b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116dd9190612798565b611bed565b610b35611bf7565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b600061085c61171f6110d4565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061177187878787612014565b9150915061177e81612101565b5095945050505050565b60655460ff161561140f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103c3565b6000611823826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122bc9092919063ffffffff16565b80519091501561140f57808060200190518101906118419190612776565b61140f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103c3565b600054610100900460ff16806118b9575060005460ff16155b6118d55760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff1615801561147b576000805461ffff19166101011790558015610d29576000805461ff001916905550565b600054610100900460ff1680611923575060005460ff16155b61193f5760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611961576000805461ffff19166101011790555b825161197490603690602086019061259a565b50815161198890603790602085019061259a565b50801561140f576000805461ff0019169055505050565b600054610100900460ff16806119b8575060005460ff16155b6119d45760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff161580156119f6576000805461ffff19166101011790555b6065805460ff191690558015610d29576000805461ff001916905550565b600054610100900460ff1680611a2d575060005460ff16155b611a495760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611a6b576000805461ffff19166101011790555b61147b33611243565b600054610100900460ff1680611a8d575060005460ff16155b611aa95760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611acb576000805461ffff19166101011790555b825160208085019190912083519184019190912060c99190915560ca55801561140f576000805461ff0019169055505050565b600054610100900460ff1680611b17575060005460ff16155b611b335760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611b55576000805461ffff19166101011790555b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960fe558015610b47576000805461ff00191690555050565b600054610100900460ff1680611ba7575060005460ff16155b611bc35760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611be5576000805461ffff19166101011790555b61147b6122d3565b610b478282612344565b600054610100900460ff1680611c10575060005460ff16155b611c2c5760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff16158015611c4e576000805461ffff19166101011790555b739067ae747976631d6194311f6cf6fd83a561b0c960009081526101636020527f9cf969c240a3d863413abb2b5686e082f605aa5d13c523f8c33d57afb6ca54a48054690214e2a7766d89d800009290611ca9908490612883565b909155505073415df4ef8f2e4afaebd99ec1d49b05a220ac367360009081526101636020527f6e9a2f9d3764c94fcda89a7be83401543628f8e0541b31bfb0325316b83c45cc8054690b02ecf74c31387fedf99290611d09908490612883565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101636020527f3b236c3cc8b75323fcfda9ae626dd9266c58d27d6f7f28b849a0591d9160686880546828b6c5bb47a018cc009290611d68908490612883565b909155505073b91e2071762e2825d3ec7513304b7f833be32d4860009081526101636020527ff64db07b09ddd9f8a7cf0b6273857c1d5fb68b81bb60eba9d23325ed3456f9cd80546127109290611dc0908490612883565b90915550507372ba03f175420890d18423500f0c6b1f2b3e821d60009081526101636020527fa82e8f5d2389b5f5b01d36ab35f251a2b7039e0251d7d8bdff94656b7168384180546901117d708271c5b400009290611e20908490612883565b909155505073692306857d17a8f31bb5feb17cfe765773487e6660009081526101636020527f9892767dcc6f39d45a05036903f5a396e2cad2bdc90e81ea1335875b137053348054680a14c14b39cdf780009290611e7f908490612883565b909155505073a7f660812022155ada962f54d2c289c5592f518a60009081526101636020527fd9581a4c94f6917ea7d40cf8ad0656f6290baee0d53733571f39d912f00891bf8054681b1ae4d6e2ef5000009290611ede908490612883565b9091555050738adbf5f4f80319cfbe8d49976aad9aacc158b4b860009081526101636020527f17b032d0e156f8cce42129fd4895a15ad617683098798c4acf50528787337e8f805468a55740b8684d6800009290611f3d908490612883565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101636020527f3b236c3cc8b75323fcfda9ae626dd9266c58d27d6f7f28b849a0591d91606868805468022b1c8c1227a000009290611f9c908490612883565b90915550507377928bbe911befe4bd4e5d6a6c6d1b7ca58eab6e60009081526101636020527f3e9583b01bddc49c7ce2d1e8ec749f36f847b8571f72e69edbd8afd183ad17bb8054681043561a88293000009290611ffb908490612883565b90915550508015610d29576000805461ff001916905550565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561204b57506000905060036120f8565b8460ff16601b1415801561206357508460ff16601c14155b1561207457506000905060046120f8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156120c8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166120f1576000600192509250506120f8565b9150600090505b94509492505050565b60008160048111156121155761211561290a565b141561211e5750565b60018160048111156121325761213261290a565b14156121805760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103c3565b60028160048111156121945761219461290a565b14156121e25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103c3565b60038160048111156121f6576121f661290a565b141561224f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103c3565b60048160048111156122635761226361290a565b1415610d295760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103c3565b60606122cb848460008561234e565b949350505050565b600054610100900460ff16806122ec575060005460ff16155b6123085760405162461bcd60e51b81526004016103c390612800565b600054610100900460ff1615801561232a576000805461ffff19166101011790555b6001610130558015610d29576000805461ff001916905550565b610b478282612476565b6060824710156123af5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103c3565b843b6123fd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103c3565b600080866001600160a01b0316858760405161241991906127b1565b60006040518083038185875af1925050503d8060008114612456576040519150601f19603f3d011682016040523d82523d6000602084013e61245b565b606091505b509150915061246b828286612561565b979650505050505050565b6001600160a01b0382166124cc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103c3565b6124d860008383611788565b80603560008282546124ea9190612883565b90915550506001600160a01b03821660009081526033602052604081208054839290612517908490612883565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60608315612570575081610491565b8251156125805782518084602001fd5b8160405162461bcd60e51b81526004016103c391906127cd565b8280546125a6906128d5565b90600052602060002090601f0160209004810192826125c8576000855561260e565b82601f106125e157805160ff191683800117855561260e565b8280016001018555821561260e579182015b8281111561260e5782518255916020019190600101906125f3565b5061261a92915061261e565b5090565b5b8082111561261a576000815560010161261f565b80356001600160a01b038116811461264a57600080fd5b919050565b60006020828403121561266157600080fd5b61049182612633565b6000806040838503121561267d57600080fd5b61268683612633565b915061269460208401612633565b90509250929050565b6000806000606084860312156126b257600080fd5b6126bb84612633565b92506126c960208501612633565b9150604084013590509250925092565b600080600080600080600060e0888a0312156126f457600080fd5b6126fd88612633565b965061270b60208901612633565b95506040880135945060608801359350608088013560ff8116811461272f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561275f57600080fd5b61276883612633565b946020939093013593505050565b60006020828403121561278857600080fd5b8151801515811461049157600080fd5b6000602082840312156127aa57600080fd5b5051919050565b600082516127c38184602087016128a9565b9190910192915050565b60208152600082518060208401526127ec8160408501602087016128a9565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156128a457634e487b7160e01b600052601160045260246000fd5b500190565b60005b838110156128c45781810151838201526020016128ac565b838111156110ce5750506000910152565b600181811c908216806128e957607f821691505b6020821081141561170c57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b72a658c3c877ddd84dd639392d1828fb18ef6b0497e42a61899bbd15cdad57864736f6c63430008070033";

type Lif2V3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Lif2V3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lif2V3__factory extends ContractFactory {
  constructor(...args: Lif2V3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lif2V3> {
    return super.deploy(overrides || {}) as Promise<Lif2V3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lif2V3 {
    return super.attach(address) as Lif2V3;
  }
  connect(signer: Signer): Lif2V3__factory {
    return super.connect(signer) as Lif2V3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Lif2V3Interface {
    return new utils.Interface(_abi) as Lif2V3Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lif2V3 {
    return new Contract(address, _abi, signerOrProvider) as Lif2V3;
  }
}
