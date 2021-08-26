import type { Web3ModalConfig } from '../hooks/useWeb3Modal';
import styled from 'styled-components';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Styles
import { colors } from '../styles';

// Custom components
import { Wallet } from '../components/Wallet';
import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { GreenLine } from '../components/GreenLine';

// Custom hooks
import { useWeb3Modal } from '../hooks/useWeb3Modal';
import { useNetworkId } from '../hooks/useNetworkId';
import { useAccount } from '../hooks/useAccount';
import { useLifTokens } from '../hooks/useLifTokens';
import { useBalances } from '../hooks/useBalances';

// Config
import {
  getNetwork,
  getInfuraId,
  getContractsAddresses
} from '../config';
// Get contracts addresses from the config
const contracts = getContractsAddresses();
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
  align-items: center;
  justify-content: center;
  z-index: 0;

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

const Wrapper = styled.section`
  margin-top: 125px;
  width: 520px;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: rgb(${colors.purple});
  font-size: 42px;
  font-weight: bold;
`;

export const Main = () => {
  const [provider, logIn, logOut] = useWeb3Modal(web3ModalConfig);
  const networkId = useNetworkId(provider);
  const account = useAccount(provider);
  const lifTokens = useLifTokens(
    provider,
    contracts.lif,
    contracts.lif2
  );
  const balances = useBalances(lifTokens, account, 2000, networkId);

  return (
    <Home>
      <Wrapper>
        <Header>
          <Title>
            Your LÍFs
          </Title>
          <Wallet
            provider={provider}
            connect={logIn}
            disconnect={logOut}
          />
        </Header>
        <Container
          title='Old Tokens'
        >
          <Balance
            balance={balances.lif}
            kind='old'
          />
          <GreenLine />
          <Balance
            balance={balances.lif}
            kind='new'
            title='Available tokens to claim'
          />
        </Container>
        <Container
          title='LIF2 Balance'
        >
          <Balance
            balance={balances.lif2}
            kind='new'
          />
        </Container>
      </Wrapper>
    </Home>
  );
};
