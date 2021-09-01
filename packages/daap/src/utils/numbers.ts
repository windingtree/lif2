import type { BigNumber } from 'ethers';
import { BigNumber as BN, utils } from 'ethers';

// Returns formatted ethers value
export const etherString = (value: BigNumber, decimals = 3): string => {
  const safeDecimals = value.isZero() ? 0 : decimals;
  const numValue = Number(utils.formatEther(value));
  const fixedDecimalsValue = numValue.toFixed(safeDecimals);
  const noDecimalsNumValue = Number(numValue.toFixed(0));
  return !value.isZero() && numValue === noDecimalsNumValue
    ? numValue.toFixed(1)
    : fixedDecimalsValue;
};

// Checks a value for zero
export const isZero = (value: BigNumber): boolean => BN.from(0).eq(value);
