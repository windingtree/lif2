import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import { useContext } from 'react';
import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Custom components
import { Account } from '../components/Account';
import { ContainerSpacer } from '../components/Container';
import { UnlockTokens } from '../components/UnlockTokens';
import { ClaimTokens } from '../components/ClaimTokens';

// Contexts
import { GlobalContext } from './Main';

// Custom hooks
import { useLifTokens } from '../hooks/useLifTokens';
import { useBalances } from '../hooks/useBalances';

// Config
import { getContractsAddresses } from '../config';
const contracts = getContractsAddresses();

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

  @media (max-width: ${responsive.sm}) {
    font-size: 32px;
  }
`;

export interface SwapProps {
  provider: Web3ModalProvider | undefined;
  logOut: Function;
}

export const Swap = () => {
  const {
    isRightNetwork,
    provider,
    logOut,
    account
  } = useContext(GlobalContext);
  const lifTokens = useLifTokens(
    provider,
    contracts.lif,
    contracts.lif2
  );
  const balances = useBalances(lifTokens, account, isRightNetwork);

  return (
    <>
      <Header>
        <Title>
          Your LÍF
        </Title>
        <Account
          account={account}
          isRightNetwork={isRightNetwork}
          logOut={logOut}
        />
      </Header>
      <ContainerSpacer />
      <UnlockTokens
        provider={provider}
        lifTokens={lifTokens}
        balances={balances}
        isRightNetwork={isRightNetwork}
      />
      <ClaimTokens
        provider={provider}
        lifTokens={lifTokens}
        balances={balances}
        isRightNetwork={isRightNetwork}
      />
    </>
  );
};
