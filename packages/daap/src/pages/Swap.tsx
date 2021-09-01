import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Custom components
import { Account } from '../components/Account';
import { ContainerSpacer } from '../components/Container';
import { UnlockTokens } from '../components/UnlockTokens';
import { ClaimTokens } from '../components/ClaimTokens';


// Custom hooks
import { useNetworkId } from '../hooks/useNetworkId';
import { useLifTokens } from '../hooks/useLifTokens';
import { useBalances } from '../hooks/useBalances';
import { useAccount } from '../hooks/useAccount';

// Config
import { getContractsAddresses, getNetworkId } from '../config';
const contracts = getContractsAddresses();
const targetNetworkId = getNetworkId()

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

export const Swap = ({ provider, logOut }: SwapProps) => {
  const networkId = useNetworkId(provider);
  const lifTokens = useLifTokens(
    provider,
    contracts.lif,
    contracts.lif2
  );
  const account = useAccount(provider);
  const balances = useBalances(lifTokens, account, 2000, networkId);

  return (
    <>
      <Header>
        <Title>
          Your LÍF
        </Title>
        <Account
          address={account}
          networkId={networkId}
          targetNetworkId={targetNetworkId}
          logOut={logOut}
        />
      </Header>
      <ContainerSpacer />
      <UnlockTokens
        provider={provider}
        lifTokens={lifTokens}
        balances={balances}
      />
      <ClaimTokens
        provider={provider}
        lifTokens={lifTokens}
        balances={balances}
      />
    </>
  );
};
