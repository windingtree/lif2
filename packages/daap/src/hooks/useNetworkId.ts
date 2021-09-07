import type { Web3ModalProvider } from './useWeb3Modal';
import { useState, useEffect } from 'react';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useNetworkId');

export type NetworkIdHook = [
  networkId: number | undefined,
  isNetworkIdLoading: boolean
];

// useNetworkId react hook
export const useNetworkId = (provider: Web3ModalProvider | undefined): NetworkIdHook => {
  const [networkId, setNetworkId] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!provider) {
      return setNetworkId(undefined);
    }

    const getNetworkId = async () => {
      try {
        setIsLoading(true);
        const network = await provider.getNetwork();
        setIsLoading(false);
        logger.info('getNetwork:', network);

        if (network) {
          setNetworkId(network.chainId);
        } else {
          setNetworkId(undefined);
        }
      } catch (error) {
        logger.error(error);
        setIsLoading(false);
        setNetworkId(undefined);
      }
    };

    getNetworkId();
  }, [provider]);

  return [
    networkId,
    isLoading
  ];
};
