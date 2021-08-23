# Lif2 Token core TS library

## Setup

Please use mono-repository script for the package bootstrap.

## NPM package

This is a private type of package so you cannot download it outside the mono-repository.
Other local packages can use it as dependency with following name: `@windingtree/lif2-token-core`
Please use an actual version of the package.

## Typescript typings

This package includes typescript typings which can be used as follows:

```typescript
import type { Lif2Token } from '@windingtree/lif2-token-core';
```

## Usage

### Initialization

```typescript
const lif2Token = new Lif2Token(
  oldLifAddress, // address of the OLD Lif contract
  lif2Address, // address of the NEW Lif contract
  <ethers.provider> // Ethers.js provider
);
```

### Tokens approval

```typescript
const {
  holder,  // Signer address
  value,   // Approved value
  tx,      // Transaction
  receipt  // Transaction receipt
} = await lif2Token.approveAllOld(
  holder1, // Transaction signer
  tx => {
    // Transaction callback
    console.log(tx);
  }
);
```

### Tokens claim

```typescript
const {
  holder,  // Signer address
  claimed, // Claimed value
  tx,      // Transaction
  receipt  // Transaction receipt
} = await lif2Token.claim(
  holder1, // Transaction signer
  tx => {
    // Transaction callback
    console.log(tx);
  }
);
```

### Whole list of methods

- `totalSupplyOld` getting of total supply from the OLD Lif contract
- `balanceOfOld` getting of account balance from the OLD contract
- `approveAllOld` approve tokens to be taken by the NEW contract
- `allowanceOld` getting of tokens allowance
- `totalSupply` getting of total supply from the NEW Lif contract
- `balanceOf` getting of account balance from the NEW contract
- `claim` claiming of tokens
- `isStopped` checking of the claim feature stopped state

## Management

### Building

```bash
npx yarn build
```

### Testing

```bash
npx yarn test
```
