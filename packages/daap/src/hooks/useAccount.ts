import type { Web3ModalProvider } from './useWeb3Modal';
import { useState, useEffect } from 'react';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useAccount');

// useAccount react hook
export const useAccount = (
  provider: Web3ModalProvider | undefined
): string | undefined => {
  const [account, setAccount] = useState<string | undefined>();

  useEffect(() => {
    if (!provider) {
      return setAccount(undefined);
    }

    const getAccount = async () => {
      try {
        const accounts = await provider.listAccounts();
        logger.debug(`listAccounts:`, accounts);
        setAccount(accounts[0]);
      } catch (error) {
        logger.error(error);
        throw error;
      }
    };

    getAccount();
  }, [provider]);

  return account;
};
