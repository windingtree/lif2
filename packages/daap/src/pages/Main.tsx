import type { Web3ModalConfig } from '../hooks/useWeb3Modal';
import styled from 'styled-components';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Styles
import { responsive } from '../styles';

// Pages
import { Hello } from './Hello';
import { Swap } from './Swap';

// Custom hooks
import { useWeb3Modal } from '../hooks/useWeb3Modal';
import { useAccount } from '../hooks/useAccount';

// Config
import {
  getNetwork,
  getInfuraId
} from '../config';
const network = getNetwork(); // Target network
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

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  overflow-x: hidden;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70.59%, #FEFEFE 121.26%), linear-gradient(146.86deg, rgba(122, 227, 148, 0.3) 11.79%, rgba(72, 219, 200, 0.3) 88.01%);
    filter: blur(434px);
  }
`;

export const PageWrapper = styled.section`
  margin: 125px 10px 125px 10px;
  width: 520px;
  z-index: 1;

  @media (max-width: ${responsive.sm}) {
    margin: 30px 10px 60px 10px;
  }
`;

export const Main = () => {
  const [provider, logIn, logOut] = useWeb3Modal(web3ModalConfig);
  const account = useAccount(provider);


  return (
    <Screen>
      <PageWrapper>
        {!account &&
          <Hello logIn={logIn} />
        }
        {account &&
          <Swap
            provider={provider}
            logOut={logOut}
          />
        }
      </PageWrapper>
    </Screen>
  );
};
