import type { IProviderInfo, IProviderControllerOptions } from 'web3modal';
import { useMemo, useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3modal from 'web3modal';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useWeb3Modal');

export type Web3ModalConfig = Partial<IProviderControllerOptions>;

export type Web3ModalProvider = ethers.providers.Web3Provider;

export type  Web3ModalHook = [
  provider: Web3ModalProvider | undefined,
  injectedProvider: IProviderInfo | undefined,
  logIn: Function,
  logOut: Function,
  isConnecting: boolean
];

// Web3Modal React Hook
export const useWeb3Modal = (web3ModalConfig: Web3ModalConfig): Web3ModalHook => {
  const [provider, setProvider] = useState<Web3ModalProvider | undefined>();
  const [injectedProvider, setInjectedProvider] = useState<IProviderInfo | undefined>();
  const [isConnecting, setIsConnecting] = useState(false);

  // Web3Modal initialization
  const web3Modal = useMemo(
    () => new Web3modal(web3ModalConfig),
    [web3ModalConfig]
  );

  const logOut = useCallback(() => {
    web3Modal.clearCachedProvider();
    setProvider(undefined);
    logger.info(`Logged Out`);
    window.location.reload();
  }, [web3Modal]);

  const logIn = useCallback(async () => {
    try {
      setIsConnecting(true);
      setInjectedProvider(
        (web3Modal as any).providerController.cachedProvider === 'injected'
          ? (web3Modal as any).providerController.injectedProvider
          : undefined
      );

      const web3ModalProvider = await web3Modal.connect();

      const updateProvider = () => setProvider(
        new ethers.providers.Web3Provider(web3ModalProvider)
      );
      updateProvider();

      // Subscribe to provider events compatible with EIP-1193 standard
      // Subscribe to accounts change
      web3ModalProvider.on('chainChanged', (chainId: number) => {
        logger.info(`Chain changed: ${chainId}`);
        updateProvider();
      });

      // Subscribe to chainId change
      web3ModalProvider.on('accountsChanged', () => {
        logger.info(`Accounts changed`);
        updateProvider();
      });

      // Subscribe to provider disconnection
      web3ModalProvider.on('disconnect', (code: number, reason: string) => {
        logger.info(`Disconnected with code: ${code} and reason: ${reason}`);
        logOut();
      });

      logger.info(`Logged In`);
    } catch (error) {
      setIsConnecting(false);
      logger.error(error);
      throw error;
    }
  }, [web3Modal, logOut]);

  useEffect(() => {
    if (!provider && web3Modal.cachedProvider) {
      logIn();
    } else if (provider) {
      setTimeout(() => setIsConnecting(false), 250);
    }
  }, [provider, web3Modal.cachedProvider, logIn]);

  return [
    provider,
    injectedProvider,
    logIn,
    logOut,
    isConnecting
  ];
};
