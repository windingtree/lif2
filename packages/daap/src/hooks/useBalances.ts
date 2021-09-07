import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { BigNumber } from 'ethers';
import { useState, useCallback } from 'react';
import { BigNumber as BN } from 'ethers';
import Logger from '../utils/logger';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useBalances');

export interface LifTokensBalances {
  lif: BigNumber;
  lif2: BigNumber;
  isClaimed: boolean;
  isSetupDone: boolean;
}

// Shorthand to zero
export const zero = BN.from(0);

// useBalances react hook
export const useBalances = (
  lifTokens: Lif2Token | undefined,
  account: string | undefined,
  isEnabled: boolean,
  pollInterval = 2000
): LifTokensBalances => {
  const [lifBalance, setLifBalance] = useState<BigNumber>(zero);
  const [lif2Balance, setLif2Balance] = useState<BigNumber>(zero);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isSetupDone, setIsSetupDone] = useState(false);

  const resetBalances = () => {
    setLifBalance(zero);
    setLif2Balance(zero);
    setIsClaimed(false);
    logger.info('Balances reset. Lif: 0; Lif2: 0; isClaimed: false');
  };

  const getBalances = useCallback(async () => {
    try {
      if (!isEnabled || !lifTokens || !account) {
        return resetBalances();
      }

      const [lif, lif2, currentIsClaimed] = await Promise.all([
        lifTokens.balanceOfOld(account),
        lifTokens.balanceOf(account),
        lifTokens.isClaimed(account)
      ]);

      // const lif = await lifTokens.balanceOfOld(account);
      setLifBalance(lif);
      logger.info(`Lif balance of ${account}: ${lif.toString()}}`);

      // const lif2 = await lifTokens.balanceOf(account);
      setLif2Balance(lif2);
      logger.info(`Lif2 balance of ${account}: ${lif2.toString()}}`);

      // const currentIsClaimed = await lifTokens.isClaimed(account);
      logger.info('Claimed state:', currentIsClaimed, account);
      setIsClaimed(currentIsClaimed);

      setIsSetupDone(true);
    } catch (error) {
      logger.error(error);
    }
  }, [isEnabled, lifTokens, account]);

  usePoller(
    getBalances,
    pollInterval,
    isEnabled && lifTokens && !!account,
    'getBalances'
  );

  return {
    lif: lifBalance,
    lif2: lif2Balance,
    isClaimed,
    isSetupDone
  };
};
