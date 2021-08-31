import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { BigNumber } from 'ethers';
import { useState, useCallback } from 'react';
import { BigNumber as BN } from 'ethers';
import Logger from '../utils/logger';

// Custom hooks
import { usePoller } from './usePoller';

// Initialize logger
const logger = Logger('useSupply');

export type UseSupplyHook = [
  totalSupply: BigNumber,
  claimedTokens: BigNumber,
  claimedPercents: number
];

// Shorthand to zero
export const zero = BN.from(0);

// useSupply react hook
export const useSupply = (
  lifTokens: Lif2Token | undefined,
  pollInterval = 5000
): UseSupplyHook => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>(zero);
  const [claimedTokens, setClaimedTokens] = useState<BigNumber>(zero);
  const [claimedPercents, setClaimedPercents] = useState<number>(0);

  const getTotalSupply = useCallback(async () => {
    try {
      if (lifTokens) {
        const currentTotalSupply = await lifTokens.totalSupply();
        logger.info('Total supply:', currentTotalSupply.toString());
        setTotalSupply(currentTotalSupply);
        const lif2Address = lifTokens.contract.address;
        const balanceOfContract = await lifTokens.balanceOf(lif2Address);
        const currentClaimedTokens = currentTotalSupply.sub(balanceOfContract);
        logger.info('Claimed tokens:', currentClaimedTokens.toString());
        setClaimedTokens(currentClaimedTokens);
        if (currentClaimedTokens.eq(zero)) {
          logger.info('Claimed percents:', 0);
          setClaimedPercents(0);
        } else {
          let currentClaimedPercents = currentClaimedTokens
            .mul(BN.from(100))
            .div(currentTotalSupply)
            .toNumber();
          currentClaimedPercents = Math.ceil(currentClaimedPercents);
          currentClaimedPercents = currentClaimedPercents > 100
            ? 100
            : currentClaimedPercents;
          logger.info('Claimed percents:', currentClaimedPercents);
          setClaimedPercents(currentClaimedPercents);
        }
      }
    } catch (error) {
      logger.error(error);
    }
  }, [lifTokens]);

  usePoller(
    getTotalSupply,
    lifTokens
      ? pollInterval
      : null
  );

  return [
    totalSupply,
    claimedTokens,
    claimedPercents
  ];
};
