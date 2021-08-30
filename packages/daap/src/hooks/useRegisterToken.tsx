import type { Web3ModalProvider } from './useWeb3Modal';
import { useCallback } from 'react';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useRegisterToken');

// useRegisterToken react hook
export const useRegisterToken = (
  provider: Web3ModalProvider | undefined,
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string
): Function => {
  const registrationCallback = useCallback(async () => {
    try {
      if (provider) {
        const wasAdded = await provider.send(
          'wallet_watchAsset',
          {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          } as any,
        );

        if (!wasAdded) {
          throw new Error('Unable to register the token in your wallet');
        }
      }
    } catch (error) {
      logger.error(error);
    }
  }, [provider, tokenAddress, tokenSymbol, tokenDecimals, tokenImage]);

  return registrationCallback;
};
