import type { Signer } from 'ethers';
import type { MethodOptions, ClaimResult } from '../types';
import type { Lif2 } from '@windingtree/lif2-token';
export declare const isStopped: (contract: Lif2) => Promise<boolean>;
export declare const isClaimed: (contract: Lif2, holder: string) => Promise<boolean>;
export declare const claim: (contract: Lif2, holderSigner: Signer, callback?: (tsResponse: import("@ethersproject/abstract-provider").TransactionResponse) => void, options?: MethodOptions) => Promise<ClaimResult>;
