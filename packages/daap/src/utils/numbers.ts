import type { BigNumber } from 'ethers';
import { BigNumber as BN, utils } from 'ethers';

// Returns formatted ethers value
export const etherString = (value: BigNumber): string => utils.formatEther(value);

// Checks a value for zero
export const isZero = (value: BigNumber): boolean => BN.from(0).eq(value);
