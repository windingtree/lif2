import type { IProviderInfo } from 'web3modal';
import type { Web3ModalConfig, Web3ModalProvider } from '../hooks/useWeb3Modal';
import { useState, useMemo, useEffect, createContext } from 'react';
import styled from 'styled-components';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Styles
import { colors, responsive } from '../styles';

// Icons
import LogoPurpleIcon from '../assets/logo-purple.svg';

// Custom components
import { Footer } from '../components/Footer';

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

const TopMessage = styled.div`
  position: relative;
  padding: 8px;
  background-color: rgb(${colors.white});
  width: 100%;
  z-index: 9999;
  text-align: center;
  font-size: 14px;
  color: rgb(${colors.black});

  a {
    color: rgb(${colors.purple});
    &:visited {
      color: rgb(${colors.purple});
      text-decoration: none;
    }
  }
`;

const TopLogoWrapper = styled.a`
  display: block;
  position: absolute;
  top: 75px;
  left: 40px;
  z-index: 9999;

  @media (max-width: ${responsive.sm}) {
    display: none;
  }
`;

const TopLogo = styled.div`
  background-image: url(${LogoPurpleIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

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
  injectedProvider?: IProviderInfo;
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
  const [provider, injectedProvider, logIn, logOut, isConnecting] = useWeb3Modal(web3ModalConfig);
  const [networkId, isNetworkIdLoading] = useNetworkId(provider);
  const [showUrlNote, setShowUrlNote] = useState(true);
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
      injectedProvider,
      account,
      isConnecting: appConnecting,
      logIn,
      logOut,
      setScreenState
    }),
    [networkId, isRightNetwork, provider, injectedProvider, logIn, logOut, account, appConnecting]
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowUrlNote(false);
    }, 10000);
    return () => clearTimeout(timeout);
  });

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {showUrlNote &&
        <TopMessage>
          Please check the URL twice. It&nbsp;should&nbsp;be&nbsp;<a href="https://lif.windingtree.com">lif.windingtree.com</a>.  Scammers will do fake websites, don’t let them send your tokens somewhere else
        </TopMessage>
      }
      <TopLogoWrapper
        href='https://windingtree.com'
      >
        <TopLogo />
      </TopLogoWrapper>
      <Screen state={screenState}>
        <PageWrapper>
          <Hello />
          <Swap />
          <Footer />
        </PageWrapper>
      </Screen>
    </GlobalContext.Provider>
  );
};
