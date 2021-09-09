import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { BigNumber } from 'ethers';
import { useState, useCallback, useEffect } from 'react';
import { BigNumber as BN } from 'ethers';
import Logger from '../utils/logger';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useAllowance');

// Shorthand to zero
export const zero = BN.from(0);

// useAllowance react hook
export const useAllowance = (
  lifTokens: Lif2Token | undefined,
  account: string | undefined,
  spender: string | undefined,
  isEnabled: boolean,
  pollInterval = 2000
): BigNumber => {
  const [accountAllowance, setAllowance] = useState<BigNumber>(zero);

  const resetAllowance = () => {
    setAllowance(zero);
    logger.info(`Allowance is set to zero`);
  };

  const getAllowance = useCallback(async () => {
    try {
      if (!isEnabled || !lifTokens || !account || !spender) {
        return setAllowance(zero);
      }

      const allowance = await lifTokens.allowanceOld(account, spender);

      logger.info(`Allowance for account "${account}":`, allowance.toString());
      setAllowance(allowance);
    } catch (error) {
      logger.error(error);
    }
  }, [isEnabled, lifTokens, account, spender]);

  usePoller(
    getAllowance,
    pollInterval,
    isEnabled && !!lifTokens && !!account && !!spender
  );

  useEffect(() => {
    if (!isEnabled || !account) {
      resetAllowance();
    }
  }, [isEnabled, account]);

  return accountAllowance;
}
