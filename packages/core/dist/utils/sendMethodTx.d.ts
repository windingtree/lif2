import type { Contract } from 'ethers';
import type { TransactionResponse } from '@ethersproject/abstract-provider';
import type { SendMethodResult } from '../types';
export declare const txCallback: (tsResponse: TransactionResponse) => void;
export declare const sendMethodTx: (contract: Contract, methodName: string, args: unknown[], callback?: (tsResponse: TransactionResponse) => void) => Promise<SendMethodResult>;
