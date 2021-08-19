/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Lif2UpgradeabilityTest,
  Lif2UpgradeabilityTestInterface,
} from "../Lif2UpgradeabilityTest";

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
    inputs: [],
    name: "newFunction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "unsafeTransfer",
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
  "0x608060405234801561001057600080fd5b506128aa806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806375f12b21116100de578063a9059cbb11610097578063c4d66de811610071578063c4d66de814610316578063d505accf14610329578063dd62ed3e1461033c578063f2fde38b1461037557600080fd5b8063a9059cbb146102de578063b9c13477146102f1578063c43b1b471461030457600080fd5b806375f12b21146102785780637ecebe00146102835780638456cb59146102965780638da5cb5b1461029e57806395d89b41146102c3578063a457c2d7146102cb57600080fd5b80633644e5151161014b5780634e71d92d116101255780634e71d92d146102345780635c975abb1461023c57806370a0823114610247578063715018a61461027057600080fd5b80633644e5151461020f57806339509351146102175780633f4ba83a1461022a57600080fd5b806306fdde0314610193578063095ea7b3146101b157806318160ddd146101d45780631b28d63e146101e657806323b872dd146101ed578063313ce56714610200575b600080fd5b61019b610388565b6040516101a89190612721565b60405180910390f35b6101c46101bf3660046126a0565b61041a565b60405190151581526020016101a8565b6035545b6040519081526020016101a8565b60016101c4565b6101c46101fb3660046125f1565b610430565b604051601281526020016101a8565b6101d86104e1565b6101c46102253660046126a0565b6104f0565b61023261052c565b005b610232610560565b60655460ff166101c4565b6101d86102553660046125a3565b6001600160a01b031660009081526033602052604090205490565b61023261092e565b60975460ff166101c4565b6101d86102913660046125a3565b610962565b610232610983565b60c9546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b61019b6109b5565b6101c46102d93660046126a0565b6109c4565b6101c46102ec3660046126a0565b610a5d565b6101c46102ff3660046126a0565b610ab8565b610194546001600160a01b03166102ab565b6102326103243660046125a3565b610ac4565b61023261033736600461262d565b610bc2565b6101d861034a3660046125be565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6102326103833660046125a3565b610d09565b60606036805461039790612829565b80601f01602080910402602001604051908101604052809291908181526020018280546103c390612829565b80156104105780601f106103e557610100808354040283529160200191610410565b820191906000526020600020905b8154815290600101906020018083116103f357829003601f168201915b5050505050905090565b6000610427338484610da4565b50600192915050565b600061043d848484610ec8565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156104c75760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6104d48533858403610da4565b60019150505b9392505050565b60006104eb6110a3565b905090565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916104279185906105279086906127d7565b610da4565b60c9546001600160a01b031633146105565760405162461bcd60e51b81526004016104be906127a2565b61055e61111e565b565b60026101625414156105b45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104be565b600261016255600033610194546040516370a0823160e01b81526001600160a01b038084166004830152929350600092909116906370a082319060240160206040518083038186803b15801561060957600080fd5b505afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064191906126ec565b9050600081116106935760405162461bcd60e51b815260206004820152601b60248201527f436c61696d61626c653a206e6f7468696e6720746f20636c61696d000000000060448201526064016104be565b61019454604051636eb1769f60e11b81526001600160a01b0384811660048301523060248301528392169063dd62ed3e9060440160206040518083038186803b1580156106df57600080fd5b505afa1580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071791906126ec565b10156107655760405162461bcd60e51b815260206004820152601d60248201527f436c61696d61626c653a20746f6b656e73206e6f7420616c6c6f77656400000060448201526064016104be565b6101945461077e906001600160a01b03168330846111b1565b610194546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b1580156107c457600080fd5b505afa1580156107d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fc91906126ec565b156108495760405162461bcd60e51b815260206004820152601d60248201527f436c61696d61626c653a20756e61626c6520746f207472616e7366657200000060448201526064016104be565b6108538282610a5d565b50816001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d48260405161088f91815260200190565b60405180910390a26001600160a01b0382166000908152610195602052604090205415610924576001600160a01b03821660009081526101956020526040812080549190556108de8382610a5d565b50826001600160a01b03167fa065a6bcbaa96b9d220b93617b9a6602d16a15aa84337912c99fc90e04d13cdb8260405161091a91815260200190565b60405180910390a2505b5050600161016255565b60c9546001600160a01b031633146109585760405162461bcd60e51b81526004016104be906127a2565b61055e600061120b565b6001600160a01b038116600090815261012f60205260408120545b92915050565b60c9546001600160a01b031633146109ad5760405162461bcd60e51b81526004016104be906127a2565b61055e61125d565b60606037805461039790612829565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015610a465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104be565b610a533385858403610da4565b5060019392505050565b6000823b15610aae5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a207472616e7366657220746f2074686520636f6e74726163740060448201526064016104be565b6104da83836112d8565b60006104da83836112d8565b600054610100900460ff1680610add575060005460ff16155b610af95760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015610b1b576000805461ffff19166101011790555b610b61604051806040016040528060098152602001682634b3102a37b5b2b760b91b815250604051806040016040528060038152602001622624a360e91b8152506112e5565b610b69611365565b610b716113e0565b610b7961143f565b610ba3604051806040016040528060098152602001682634b3102a37b5b2b760b91b8152506114a6565b610bac82611531565b8015610bbe576000805461ff00191690555b5050565b83421115610c125760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104be565b600061013054888888610c248c611a59565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c7f82611a82565b90506000610c8f82878787611ad0565b9050896001600160a01b0316816001600160a01b031614610cf25760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104be565b610cfd8a8a8a610da4565b50505050505050505050565b60c9546001600160a01b03163314610d335760405162461bcd60e51b81526004016104be906127a2565b6001600160a01b038116610d985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104be565b610da18161120b565b50565b6001600160a01b038316610e065760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104be565b6001600160a01b038216610e675760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104be565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610f2c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104be565b6001600160a01b038216610f8e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104be565b610f99838383611af8565b6001600160a01b038316600090815260336020526040902054818110156110115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104be565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906110489084906127d7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161109491815260200190565b60405180910390a35b50505050565b60006104eb7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6110d260fb5490565b60fc546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60655460ff166111675760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104be565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261109d908590611b3e565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60655460ff16156112a35760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104be565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111943390565b6000610427338484610ec8565b600054610100900460ff16806112fe575060005460ff16155b61131a5760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff1615801561133c576000805461ffff19166101011790555b611344611c10565b61134e8383611c7a565b8015611360576000805461ff00191690555b505050565b600054610100900460ff168061137e575060005460ff16155b61139a5760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff161580156113bc576000805461ffff19166101011790555b6113c4611c10565b6113cc611d0f565b8015610da1576000805461ff001916905550565b600054610100900460ff16806113f9575060005460ff16155b6114155760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611437576000805461ffff19166101011790555b6113cc611c10565b600054610100900460ff1680611458575060005460ff16155b6114745760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611496576000805461ffff19166101011790555b61149e611c10565b6113cc611d84565b600054610100900460ff16806114bf575060005460ff16155b6114db5760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff161580156114fd576000805461ffff19166101011790555b611505611c10565b61152882604051806040016040528060018152602001603160f81b815250611de4565b610bac82611e6e565b600054610100900460ff168061154a575060005460ff16155b6115665760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611588576000805461ffff19166101011790555b6001600160a01b0382166115de5760405162461bcd60e51b815260206004820181905260248201527f436c61696d61626c653a20696e76616c696420746f6b656e206164647265737360448201526064016104be565b61019480546001600160a01b0319166001600160a01b038416179055611602611eff565b6116923061019460009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561165557600080fd5b505afa158015611669573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168d91906126ec565b611f5e565b739067ae747976631d6194311f6cf6fd83a561b0c960009081526101956020527f983810347d19555c0f0ad17f67eaaaae4241b884b9be4de7a3c98bb0846561d78054690214e2a7766d89d8000092906116ed9084906127d7565b909155505073415df4ef8f2e4afaebd99ec1d49b05a220ac367360009081526101956020527f1811462d8c39a6c365dcb18db7fbdf2c9054f5bdca2f673cfaac08b263d11ed68054690b02ecf74c31387fedf9929061174d9084906127d7565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101956020527f09e467c6c77983de865cd7ab0631c1b24051dfcb82e921b4753f9e4d542c186d80546828b6c5bb47a018cc0092906117ac9084906127d7565b909155505073b91e2071762e2825d3ec7513304b7f833be32d4860009081526101956020527f585d150d712c3a4969d0a39171246893fb44d8c3096ad20b1a88f5517270c4e6805461271092906118049084906127d7565b90915550507372ba03f175420890d18423500f0c6b1f2b3e821d60009081526101956020527f07dc8939dc46a97568a1234299021b54fdbb5fa6a8935095942cccc7e3054f9080546901117d708271c5b4000092906118649084906127d7565b909155505073692306857d17a8f31bb5feb17cfe765773487e6660009081526101956020527f096b0861f28d6a87f98484866e50ad4e84fea23763729afb89e5179b20d4e9c08054680a14c14b39cdf7800092906118c39084906127d7565b909155505073a7f660812022155ada962f54d2c289c5592f518a60009081526101956020527f9b8dcaf0d13bdab175c70043c47a1d7b54473ba975987b724a2860cd445699ed8054681b1ae4d6e2ef50000092906119229084906127d7565b9091555050738adbf5f4f80319cfbe8d49976aad9aacc158b4b860009081526101956020527f644eaa1ae50a0e3735414b56798ccb69e6313669eaf3f366609e4290ab8272ff805468a55740b8684d68000092906119819084906127d7565b90915550507377e4588685744cdbddbf677860b42a3c28e166dd60009081526101956020527f09e467c6c77983de865cd7ab0631c1b24051dfcb82e921b4753f9e4d542c186d805468022b1c8c1227a0000092906119e09084906127d7565b90915550507377928bbe911befe4bd4e5d6a6c6d1b7ca58eab6e60009081526101956020527f3c65a203b18f337c93988c37a5034fd8c1a21527b71fa54113c78eaf4d09407f8054681043561a88293000009290611a3f9084906127d7565b90915550508015610bbe576000805461ff00191690555050565b6001600160a01b038116600090815261012f602052604090208054600181018255905b50919050565b600061097d611a8f6110a3565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611ae187878787611f68565b91509150611aee81612055565b5095945050505050565b60655460ff16156113605760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104be565b6000611b93826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122109092919063ffffffff16565b8051909150156113605780806020019051810190611bb191906126ca565b6113605760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104be565b600054610100900460ff1680611c29575060005460ff16155b611c455760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff161580156113cc576000805461ffff19166101011790558015610da1576000805461ff001916905550565b600054610100900460ff1680611c93575060005460ff16155b611caf5760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611cd1576000805461ffff19166101011790555b8251611ce49060369060208601906124ee565b508151611cf89060379060208501906124ee565b508015611360576000805461ff0019169055505050565b600054610100900460ff1680611d28575060005460ff16155b611d445760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611d66576000805461ffff19166101011790555b6065805460ff191690558015610da1576000805461ff001916905550565b600054610100900460ff1680611d9d575060005460ff16155b611db95760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611ddb576000805461ffff19166101011790555b6113cc3361120b565b600054610100900460ff1680611dfd575060005460ff16155b611e195760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611e3b576000805461ffff19166101011790555b825160208085019190912083519184019190912060fb9190915560fc558015611360576000805461ff0019169055505050565b600054610100900460ff1680611e87575060005460ff16155b611ea35760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611ec5576000805461ffff19166101011790555b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610130558015610bbe576000805461ff00191690555050565b600054610100900460ff1680611f18575060005460ff16155b611f345760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff16158015611f56576000805461ffff19166101011790555b6113cc612227565b610bbe8282612298565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611f9f575060009050600361204c565b8460ff16601b14158015611fb757508460ff16601c14155b15611fc8575060009050600461204c565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561201c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166120455760006001925092505061204c565b9150600090505b94509492505050565b60008160048111156120695761206961285e565b14156120725750565b60018160048111156120865761208661285e565b14156120d45760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104be565b60028160048111156120e8576120e861285e565b14156121365760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104be565b600381600481111561214a5761214a61285e565b14156121a35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104be565b60048160048111156121b7576121b761285e565b1415610da15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104be565b606061221f84846000856122a2565b949350505050565b600054610100900460ff1680612240575060005460ff16155b61225c5760405162461bcd60e51b81526004016104be90612754565b600054610100900460ff1615801561227e576000805461ffff19166101011790555b6001610162558015610da1576000805461ff001916905550565b610bbe82826123ca565b6060824710156123035760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104be565b843b6123515760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104be565b600080866001600160a01b0316858760405161236d9190612705565b60006040518083038185875af1925050503d80600081146123aa576040519150601f19603f3d011682016040523d82523d6000602084013e6123af565b606091505b50915091506123bf8282866124b5565b979650505050505050565b6001600160a01b0382166124205760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104be565b61242c60008383611af8565b806035600082825461243e91906127d7565b90915550506001600160a01b0382166000908152603360205260408120805483929061246b9084906127d7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b606083156124c45750816104da565b8251156124d45782518084602001fd5b8160405162461bcd60e51b81526004016104be9190612721565b8280546124fa90612829565b90600052602060002090601f01602090048101928261251c5760008555612562565b82601f1061253557805160ff1916838001178555612562565b82800160010185558215612562579182015b82811115612562578251825591602001919060010190612547565b5061256e929150612572565b5090565b5b8082111561256e5760008155600101612573565b80356001600160a01b038116811461259e57600080fd5b919050565b6000602082840312156125b557600080fd5b6104da82612587565b600080604083850312156125d157600080fd5b6125da83612587565b91506125e860208401612587565b90509250929050565b60008060006060848603121561260657600080fd5b61260f84612587565b925061261d60208501612587565b9150604084013590509250925092565b600080600080600080600060e0888a03121561264857600080fd5b61265188612587565b965061265f60208901612587565b95506040880135945060608801359350608088013560ff8116811461268357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156126b357600080fd5b6126bc83612587565b946020939093013593505050565b6000602082840312156126dc57600080fd5b815180151581146104da57600080fd5b6000602082840312156126fe57600080fd5b5051919050565b600082516127178184602087016127fd565b9190910192915050565b60208152600082518060208401526127408160408501602087016127fd565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156127f857634e487b7160e01b600052601160045260246000fd5b500190565b60005b83811015612818578181015183820152602001612800565b8381111561109d5750506000910152565b600181811c9082168061283d57607f821691505b60208210811415611a7c57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220e72b705f2c6bf847c1de41b1d33f61a9642e02c68626004f9cbde9dbb82d4d6064736f6c63430008070033";

export class Lif2UpgradeabilityTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lif2UpgradeabilityTest> {
    return super.deploy(overrides || {}) as Promise<Lif2UpgradeabilityTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lif2UpgradeabilityTest {
    return super.attach(address) as Lif2UpgradeabilityTest;
  }
  connect(signer: Signer): Lif2UpgradeabilityTest__factory {
    return super.connect(signer) as Lif2UpgradeabilityTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Lif2UpgradeabilityTestInterface {
    return new utils.Interface(_abi) as Lif2UpgradeabilityTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lif2UpgradeabilityTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Lif2UpgradeabilityTest;
  }
}