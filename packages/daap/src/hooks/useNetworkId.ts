import type { Web3ModalProvider } from './useWeb3Modal';
import { useState, useEffect } from 'react';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useNetworkId');

// useNetworkId react hook
export const useNetworkId = (provider: Web3ModalProvider | undefined): number | undefined => {
  const [networkId, setNetworkId] = useState<number | undefined>();

  useEffect(() => {
    if (!provider) {
      return setNetworkId(undefined);
    }

    const getNetworkId = async () => {
      try {
        const network = await provider.getNetwork();
        logger.info('getNetwork:', network);

        if (network) {
          setNetworkId(network.chainId);
        } else {
          setNetworkId(undefined);
        }
      } catch (error) {
        logger.error(error);
        throw error;
      }
    };

    getNetworkId();
  }, [provider]);

  return networkId;
};
