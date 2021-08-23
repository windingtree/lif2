import type { ContractReceipt, Event } from 'ethers';

export const extractEvents = (
  receipt: ContractReceipt,
  eventName: string,
  mustThrow = true
): Event[] | undefined => {
  const events = receipt.events?.filter((e: any) => e.event === eventName);
  if (mustThrow && (!events || events.length === 0)) {
    throw new Error(`Don't found events of name: ${eventName}`);
  }
  return events;
};
