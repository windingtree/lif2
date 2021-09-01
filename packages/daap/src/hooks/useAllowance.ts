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
  isRightNetwork: boolean,
  pollInterval = 2000
): BigNumber => {
  const [accountAllowance, setAllowance] = useState<BigNumber>(zero);

  const resetAllowance = () => {
    setAllowance(zero);
    logger.info(`Allowance is set to zero`);
  };

  const getAllowance = useCallback(async () => {
    try {
      if (!isRightNetwork || !lifTokens || !account || !spender) {
        return setAllowance(zero);
      }

      const allowance = await lifTokens.allowanceOld(account, spender);

      if (!allowance.eq(accountAllowance)) {
        logger.info('Allowance changed:', allowance.toString());
        setAllowance(allowance);
      }
    } catch (error) {
      logger.error(error);
    }
  }, [isRightNetwork, lifTokens, account, spender, accountAllowance]);

  usePoller(
    getAllowance,
    pollInterval,
    isRightNetwork && !!lifTokens && !!account && !!spender
  );

  useEffect(() => {
    if (!isRightNetwork || !account) {
      resetAllowance();
    }
  }, [isRightNetwork, account]);

  return accountAllowance;
}
