# Lif2 Token Smart Contract

The token implements ERC20 interface and the related use cases that described in the [EIP-20](https://eips.ethereum.org/EIPS/eip-20) specification with following extensions:
- `Pausable` functionality (native OpenZeppelin's implementation)
- `Ownable` functionality (native OpenZeppelin's implementation)
- [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612[EIP-2612])  (ERC20 `Permit`, native OpenZeppelin's draft implementation)
- `Claimable` functionality dedicated for migration of tokens from the old Lif token contract (custom implementation).

The token is made for using the OpenZeppelin proxy-based upgradeability system.
So the token contracts uses the initializer function instead of constructors.
The root initializer may be called only once right after the deployment. The restriction is managed by Initializable contract (native OpenZeppelin's implementation).

ERC20 `transfer(address,uint256)` OpenZeppelin's function implementation is changed to prevent making transfers of tokens to the contracts.

The Claimable functionality has two features:
- old Lif tokens migration
- restoration of tokens that stuck in the old Lif contract as a result of the wrong transfers to the contract address. The list of senders and sent tokens values are taken from this request: https://etherscan.io/token/0xeb9951021698b42e4399f9cbb6267aa35f82d59d?a=0xeb9951021698b42e4399f9cbb6267aa35f82d59d

The initialization function of the Claimable contract reads the `totalSupply` value of the old Lif token contract and mints the equal number of the new tokens.
The holder of these minted tokens is the contract itself.
The contract does not provide a possibility to transfer these tokens except through the `claim()` function. Also during the initialization:
- an address of the old Lif contract is saving to the new token contract;
- `stuckBalance` - the list of balances that are stuck in the old contract is saved to the new token storage using the `_afterClaimableInitHook()` function. This function is overriding by the root contract and the storage update directives are hardcoded into this function.

To use the `claim()` function a holder of old Lif tokens must approve spending of these tokens by the contract address. A call of the `claim()` function will have the following results:
- the whole balance of old Lif tokens of the caller will be transferred to the new contract address. Recovering these funds will not be possible anymore.
- equal number of new tokens will be transferred to the caller address and a `Claim` event will be emitted
- transaction to call may be reverted in following cases:
  - balance of old tokens is equal to zero or a user does not approved them;
  - transfer of old tokens from its owner to the new contract is failed;
  - the transfer is succeeded but the caller balance does not become equal to zero;
- in case the address of a caller has a positive `stuckBalance` the caller will be credited with the value of this balance. Along with it, this balance will be set to zero and a `Resurrect` event will be emitted.
## Environment setup

Please use mono-repository root script for the package bootstrap.

## NPM package

This is a private type of package so you cannot download it outside the mono-repository.
Other local packages can use it as dependency with following name: `@windingtree/lif2-token`
Please use an actual version of the package.

## Typescript typings

This package includes typescript typings which can be used as follows:

```typescript
import type {
  Lif2,
  ERC20Upgradeable
} from '@windingtree/lif2-token/typechain';
```

## Built contract, ABI and deployed proxy address

```typescript
import ERC20Contract from '@windingtree/lif2-token/artifacts/contracts/OldLifTest.sol/OldLifTest.json';
import Lif2Contract from '@windingtree/lif2-token/artifacts/contracts/Lif2.sol/Lif2.json';

// Proxy instance in the Ropsten network
import ropstenDeployment from '@windingtree/lif2-token/.openzeppelin/ropsten.json';
const ropstenLifAddress = ropstenDeployment.proxies[0].address;
/*
ropstenLifAddress -> 0x40a9c072848243EA5bFd88d9f18A6Fa3af0B3d31
*/
```

## Management

### Compile contract

```bash
yarn compile
```

### Linting & Testing

```bash
yarn lint
yarn test
```

To run the code you will need to create a `network.json` in the root folder of this package. The content of this file may look like:

```json
{
  "ropsten": {
    "url": "https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>",
    "accounts": [
      "<PRIVATE_KEY_OF_THE_DEPLOYER_ACCOUNT>"
    ]
  },
  "hardhat": {
    "chainId": 1337,
    "initialBaseFeePerGas": 0
  },
  "etherscan": {
    "apiKey": "<YOUR_ETHERSCAN_API_KEY>"
  }
}
```

### Deployment

It is required to compile contract before the deployment.

```bash
npx hardhat --network <NETWORK_NAME> deploy
```

The contract instance as well as the address of the proxy contract deployed will be saved in the file:
`./openzeppelin/<NETWORK_NAME>.json`

### The proxy admin ownership transfer

This operation will be required if you want to transfer an ability to make upgrades of a token to a multisig wallet or DAO.

```bash
npx hardhat --network <NETWORK_NAME> transfer --address <ACCOUNT_ADDRESS>
```

### Upgrade

```bash
npx hardhat --network <NETWORK_NAME> upgrade --name <NAME_OF_THE_NEW_CONTRACT>
```

### Prepare an upgrade

This operation will be required if you want to just deploy a new instance. As result, you will get an address of the deployed contract instance which can be used in the multisig wallet or DAO for initialization of an upgrade.

```bash
npx hardhat --network <NETWORK_NAME> prepare --name <NAME_OF_THE_NEW_CONTRACT>
```

A result will look like:

```text
Lif2V2 instance deployed at: 0x8626f6940E2...F49B2d1F2C9C1199
```
