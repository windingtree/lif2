import type { Contract } from 'ethers';
import type { TransactionResponse } from '@ethersproject/abstract-provider';
import type { SendMethodResult } from '../types';

export const txCallback = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tsResponse: TransactionResponse
): void =>
// eslint-disable-next-line @typescript-eslint/no-empty-function
{};

export const sendMethodTx = async (
  contract: Contract,
  methodName: string,
  args: unknown[],
  callback = txCallback
): Promise<SendMethodResult> => {
  const signer = contract.signer;
  // Estimate transaction gas
  const gas = await contract.estimateGas[methodName](...args);

  // Validate balance
  const ownerBalance = await signer.getBalance();

  if (ownerBalance.lt(gas)) {
    throw new Error('Insufficient balance to sent transaction');
  }

  // Send transaction
  const tx: TransactionResponse = await contract[methodName](...args);
  callback(tx);
  const receipt = await tx.wait();

  return {
    tx,
    receipt
  };
};
