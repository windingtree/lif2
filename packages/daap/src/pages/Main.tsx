import type { Web3ModalConfig, Web3ModalProvider } from '../hooks/useWeb3Modal';
import { useState, useMemo, createContext } from 'react';
import styled from 'styled-components';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Styles
import { responsive } from '../styles';

// Pages
import { Hello } from './Hello';
import { Swap } from './Swap';

// Custom hooks
import { useWeb3Modal } from '../hooks/useWeb3Modal';
import { useNetworkId } from '../hooks/useNetworkId';
import { useAccount } from '../hooks/useAccount';

// Config
import {
  getNetwork,
  getNetworkId,
  getInfuraId
} from '../config';
const network = getNetwork();
const targetNetworkId = getNetworkId();
const web3ModalConfig: Web3ModalConfig = {
  network: network.name,
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: getInfuraId()
      }
    }
  }
};

export interface ScreenProps {
  state?: number;
}

const getGradientByState = (state?: number): string => {
  if (state === 1) {
    return '0.4';
  } else if (state === 2) {
    return '0.6';
  }

  return '0.2';
};

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 70.59%,
      #FEFEFE 121.26%),
      linear-gradient(146.86deg,
      rgba(122, 227, 148, ${({ state }: ScreenProps) => getGradientByState(state)}) 11.79%,
      rgba(72, 219, 200, ${({ state }: ScreenProps) => getGradientByState(state)}) 88.01%
    );
    filter: blur(434px);
  }
`;

export const PageWrapper = styled.section`
  margin: 125px 10px 125px 10px;
  width: 520px;
  max-width: 520px;
  z-index: 1;

  @media (max-width: ${responsive.sm}) {
    margin: 30px 10px 60px 10px;
  }
`;

export interface GlobalContextObject {
  networkId?: number;
  isRightNetwork: boolean;
  provider?: Web3ModalProvider;
  account?: string;
  isConnecting: boolean;
  logIn: Function;
  logOut: Function;
  setScreenState: Function;
}

// Global context
export const GlobalContext = createContext<GlobalContextObject>({
  networkId: undefined,
  isRightNetwork: false,
  provider: undefined,
  account: undefined,
  isConnecting: false,
  logIn: () => {},
  logOut: () => {},
  setScreenState: () => {}
});

export const Main = () => {
  const [screenState, setScreenState] = useState<number>(0);
  const [provider, logIn, logOut, isConnecting] = useWeb3Modal(web3ModalConfig);
  const [networkId, isNetworkIdLoading] = useNetworkId(provider);
  const appConnecting = useMemo(
    () => isConnecting || isNetworkIdLoading,
    [isConnecting, isNetworkIdLoading]
  );
  const isRightNetwork = useMemo(
    () => isNetworkIdLoading ||
      (!!networkId && !!targetNetworkId && networkId === targetNetworkId),
    [networkId, isNetworkIdLoading]
  );
  const account = useAccount(provider);
  const globalContextValue = useMemo(
    () => ({
      networkId,
      isRightNetwork,
      provider,
      account,
      isConnecting: appConnecting,
      logIn,
      logOut,
      setScreenState
    }),
    [networkId, isRightNetwork, provider, logIn, logOut, account, appConnecting]
  );

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Screen state={screenState}>
        <PageWrapper>
          <Hello />
          <Swap />
        </PageWrapper>
      </Screen>
    </GlobalContext.Provider>
  );
};
