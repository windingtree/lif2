import type { ContractReceipt, Event } from 'ethers';
export declare const extractEvents: (receipt: ContractReceipt, eventName: string, mustThrow?: boolean) => Event[] | undefined;
