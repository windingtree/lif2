import type { Signer, BigNumber } from 'ethers';
import type { MethodOptions, ApproveResult } from '../types';
import type { ERC20Upgradeable, Lif2 } from '@windingtree/lif2-token';
export declare const totalSupplyOld: (oldContract: ERC20Upgradeable) => Promise<BigNumber>;
export declare const balanceOfOld: (oldContract: ERC20Upgradeable, address: string) => Promise<BigNumber>;
export declare const allowanceOld: (oldContract: ERC20Upgradeable, owner: string, spender: string) => Promise<BigNumber>;
export declare const approveAllOld: (oldContract: ERC20Upgradeable, contract: Lif2, ownerSigner: Signer, callback?: (tsResponse: import("@ethersproject/abstract-provider").TransactionResponse) => void, options?: MethodOptions) => Promise<ApproveResult>;
export declare const totalSupply: (contract: Lif2) => Promise<BigNumber>;
export declare const balanceOf: (contract: Lif2, address: string) => Promise<BigNumber>;
