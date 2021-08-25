import type { Web3ModalConfig } from '../hooks/useWeb3Modal';
import styled from 'styled-components';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Custom components
import { Header } from '../components/Header';
import { Wallet } from '../components/Wallet';

// Custom hooks
import { useWeb3Modal } from '../hooks/useWeb3Modal';
import { useNetworkId } from '../hooks/useNetworkId';

// Config
import { getNetwork, getInfuraId } from '../config';
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

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Logo = styled.div`
display: inline-block;
align-items: center;
`;

export const Main = () => {
  const [provider, logIn, logOut] = useWeb3Modal(web3ModalConfig);
  const networkId = useNetworkId(provider);

  return (
    <Home>
      <Header>
        <Logo>AAAAA</Logo>
        <div>{networkId}</div>
        <Wallet
          provider={provider}
          connect={logIn}
          disconnect={logOut}
        />
      </Header>
    </Home>
  );
};
