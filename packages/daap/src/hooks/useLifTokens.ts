import type { Web3ModalProvider } from './useWeb3Modal';
import { useState, useEffect } from 'react';
import { Lif2Token } from '@windingtree/lif2-token-core';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useLifTokens');

// useLifTokens react hook
export const useLifTokens = (
  provider: Web3ModalProvider | undefined,
  lifAddress: string,
  lif2Address: string
) => {
  const [lifTokens, setLifTokens] = useState<Lif2Token | undefined>();

  useEffect(() => {
    try {
      if (provider && lifAddress && lif2Address) {
        const instance = new Lif2Token(
          lifAddress,
          lif2Address,
          provider
        );
        setLifTokens(instance);
        logger.info('Lif tokens interface class has been initialized', instance);
      }
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }, [provider, lifAddress, lif2Address]);

  return lifTokens;
};
