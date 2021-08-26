import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { BigNumber } from 'ethers';
import { useState, useCallback, useEffect } from 'react';
import { BigNumber as BN } from 'ethers';
import Logger from '../utils/logger';
import { getNetworkId } from '../config';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useBalances');

export interface LifTokensBalances {
  lif: BigNumber;
  lif2: BigNumber;
}

// Shorthand to zero
const zero = BN.from(0);

// Target network Id
const targetNetworkId = getNetworkId();

// useBalances react hook
export const useBalances = (
  lifTokens: Lif2Token | undefined,
  account: string | undefined,
  pollInterval = 2000,
  networkId: number | undefined
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
      if (!lifTokens || !account || networkId !== targetNetworkId) {
        return resetBalances();
      }

      const lif = await lifTokens.balanceOfOld(account);
      setLifBalance(lif);
      logger.info(`Lif balance of ${account}: ${lif.toString()}}`);
      const lif2 = await lifTokens.balanceOf(account);
      setLif2Balance(lif2);
      logger.info(`Lif2 balance of ${account}: ${lif2.toString()}}`);
    } catch (error) {
      logger.error(error);
    }
  }, [lifTokens, account, networkId]);

  usePoller(
    getBalances,
    lifTokens && account && networkId === targetNetworkId
      ? pollInterval
      : null,
    account
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
