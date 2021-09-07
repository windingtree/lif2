import type { Signer, BigNumber } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';
import type { ERC20Upgradeable, Lif2 } from '@windingtree/lif2-token/typechain';
import type { ApproveResult, ClaimResult, MethodOptions } from './types';
import { ethers } from 'ethers';
/**
 * Lif2 token interface class
 * @class Lif2Token
 */
export declare class Lif2Token {
    oldContract: ERC20Upgradeable;
    contract: Lif2;
    /**
     * Creates an instance of Lif2.
     * @param {string} address
     * @param {Object} provider
     * @memberof Lif2Token
     */
    constructor(oldAddress: string, address: string, provider: Provider);
    totalSupplyOld(): Promise<BigNumber>;
    balanceOfOld(address: string): Promise<BigNumber>;
    approveAllOld(owner: Signer, callback?: (tsResponse: ethers.providers.TransactionResponse) => void, options?: MethodOptions): Promise<ApproveResult>;
    allowanceOld(owner: string, spender: string): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    balanceOf(address: string): Promise<BigNumber>;
    isStopped(): Promise<boolean>;
    isClaimed(address: string): Promise<boolean>;
    claim(owner: Signer, callback?: (tsResponse: ethers.providers.TransactionResponse) => void, options?: MethodOptions): Promise<ClaimResult>;
}
