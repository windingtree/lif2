# Lif2 Token Smart Contract

## Setup

Please use mono-repository script for the package bootstrap.

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
} from '@windingtree/lif2-token';
```

## Built contract, ABI and deployed proxy address

```typescript
import {
  Lif2Contract,
  Lif2ContractAbi,
  proxy
} from '@windingtree/lif2-token';

// Proxy instance in the Ropsten network
const ropstenLifAddress = proxy.ropsten;
/*
ropstenLifAddress -> 0x40a9c072848243EA5bFd88d9f18A6Fa3af0B3d31
*/
```

## Management

### Compile contract

```bash
npx yarn compile
```

### Testing

```bash
npx yarn test
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
