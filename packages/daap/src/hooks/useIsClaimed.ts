import type { Lif2Token } from '@windingtree/lif2-token-core';
import { useState, useCallback, useEffect } from 'react';
import Logger from '../utils/logger';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useIsClaimed');

export const useIsClaimed = (
  lifTokens: Lif2Token | undefined,
  account: string | undefined,
  isRightNetwork: boolean,
  pollInterval = 2000
): boolean => {
  const [isClaimed, setIsClaimed] = useState(false);

  const resetIsClaimed = () => {
    setIsClaimed(false);
  };

  const getIsClaimed = useCallback(async () => {
    try {
      if (!isRightNetwork || !lifTokens || !account) {
        return resetIsClaimed();
      }

      const currentIsClaimed = await lifTokens.isClaimed(account);
      logger.info('Claimed state:', currentIsClaimed);
      setIsClaimed(currentIsClaimed);
    } catch (error) {
      logger.error(error);
    }
  }, [lifTokens, account, isRightNetwork]);

  usePoller(
    getIsClaimed,
    pollInterval,
    isRightNetwork && lifTokens && !!account
  );

  useEffect(() => {
    resetIsClaimed();
  }, [account]);

  return isClaimed;
};
