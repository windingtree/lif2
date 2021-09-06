import type { Signer, BigNumber } from 'ethers';
import type { MethodOptions, ClaimResult } from '../types';
import type { Lif2 } from '@windingtree/lif2-token';
import { BigNumber as BN } from 'ethers';
import { sendMethodTx, txCallback } from '../utils/sendMethodTx';
import { extractEvents } from '../utils/extractEvents';

// Checks stopped state
export const isStopped = async (contract: Lif2): Promise<boolean> =>
  contract['stopped()']();

// Checks if a holder ever claimed tokens
export const isClaimed = async (
  contract: Lif2,
  holder: string
): Promise<boolean> => {
  const eventFilter = contract.filters.Claim(holder);
  const events = await contract.queryFilter(eventFilter);
  return events && events.length > 0;
}

// Claim tokens
// - the callback function will be called right after a transaction sent
export const claim = async (
  contract: Lif2,
  holderSigner: Signer,
  callback = txCallback,
  options: MethodOptions = {}
): Promise<ClaimResult> => {
  const stopped = await isStopped(contract);

  if (stopped) {
    throw new Error('The claim of tokens feature is stopped.');
  }

  const contractWithSigner = contract.connect(holderSigner);
  const holder = await holderSigner.getAddress();

  const txArgs = [
    options
  ];

  const { tx, receipt } = await sendMethodTx(
    contractWithSigner,
    'claim()',
    txArgs,
    callback
  );

  let claimed: BigNumber;
  let resurrected: BigNumber;

  try {
    const claimEvents: any = extractEvents(receipt, 'Claim');
    claimed = claimEvents[0].args.value;
    const resurrectEvents: any = extractEvents(receipt, 'Resurrect', false);
    resurrected = resurrectEvents.length > 0 ? resurrectEvents[0].args.value : BN.from(0);
  } catch (error) {
    console.error(error);
    throw new Error(
      'Unable to claim tokens.'
    );
  }

  return {
    holder,
    claimed,
    resurrected,
    tx,
    receipt
  };
};
