import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { BigNumber } from 'ethers';
import { useState, useCallback, useEffect } from 'react';
import { BigNumber as BN } from 'ethers';
import Logger from '../utils/logger';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useBalances');

export interface LifTokensBalances {
  lif: BigNumber;
  lif2: BigNumber;
}

// Shorthand to zero
export const zero = BN.from(0);

// useBalances react hook
export const useBalances = (
  lifTokens: Lif2Token | undefined,
  account: string | undefined,
  isRightNetwork: boolean,
  pollInterval = 2000
): LifTokensBalances => {
  const [lifBalance, setLifBalance] = useState<BigNumber>(zero);
  const [lif2Balance, setLif2Balance] = useState<BigNumber>(zero);

  const resetBalances = () => {
    setLifBalance(zero);
    setLif2Balance(zero);
    logger.info(`Balances reset. Lif: 0; Lif2: 0}`);
  };

  const getBalances = useCallback(async () => {
    try {
      if (!isRightNetwork || !lifTokens || !account) {
        return resetBalances();
      }

      const lif = await lifTokens.balanceOfOld(account);
      if (!lif.eq(lifBalance)) {
        setLifBalance(lif);
        logger.info(`Lif balance of ${account}: ${lif.toString()}}`);
      }
      const lif2 = await lifTokens.balanceOf(account);
      if (!lif2.eq(lif2Balance)) {
        setLif2Balance(lif2);
        logger.info(`Lif2 balance of ${account}: ${lif2.toString()}}`);
      }
    } catch (error) {
      logger.error(error);
    }
  }, [isRightNetwork, lifTokens, account, lifBalance, lif2Balance]);

  usePoller(
    getBalances,
    pollInterval,
    isRightNetwork && !!lifTokens && !!account
  );

  useEffect(() => {
    if (!account) {
      resetBalances();
    }
  }, [account]);

  return {
    lif: lifBalance,
    lif2: lif2Balance
  };
};
