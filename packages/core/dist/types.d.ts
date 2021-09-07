import type { ContractReceipt, Transaction, BigNumber } from 'ethers';
export interface MethodOptions {
    gasPrice?: string;
    gasLimit?: string;
    value?: BigNumber;
    nonce?: BigNumber;
}
export interface SendMethodResult {
    tx: Transaction;
    receipt: ContractReceipt;
}
export interface ClaimResult {
    holder: string;
    claimed: BigNumber;
    resurrected: BigNumber;
    tx: Transaction;
    receipt: ContractReceipt;
}
export interface ApproveResult {
    holder: string;
    value: BigNumber;
    tx: Transaction;
    receipt: ContractReceipt;
}
