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

```typescript
const lif2Token = new Lif2Token(
  oldLifAddress, // address of the OLD Lif contract
  lif2Address, // address of the NEW Lif contract
  <ethers.provider> // Ethers.js provider
);
```

## Management

### Building

```bash
npx yarn build
```

### Testing

```bash
npx yarn test
```
