import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import type { Signer } from 'ethers';
import { useState, useEffect } from 'react';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useSigner');

export type SignerWithAddress = [
  Signer | undefined,
  string | undefined,
  Error | null
];

// useSigner react hook
export const useSigner = (provider: Web3ModalProvider | undefined): SignerWithAddress => {
  const [error, setError] = useState<Error | null>(null);
  const [account, setAccount] = useState<string | undefined>();
  const [signer, setSigner] = useState<Signer | undefined>();

  useEffect(() => {
    const getAccount = async () => {
      try {
        setError(null);

        if (provider) {
          const currentSigner = provider.getSigner();
          logger.info('Signer changed', currentSigner);
          setSigner(currentSigner);
          const currentAccount = await currentSigner.getAddress();
          logger.info('Signer account changed', currentAccount);
          setAccount(currentAccount);
        }
      } catch (error) {
        logger.error(error);
        setError(error);
      }
    };

    getAccount();
  }, [provider]);

  return [
    signer,
    account,
    error
  ];
};
