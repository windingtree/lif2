import { useContext, useEffect } from 'react';
import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Custom components
import { Account } from '../components/Account';
import { ContainerSpacer } from '../components/Container';
import { UnlockTokens } from '../components/UnlockTokens';
import { ClaimTokens } from '../components/ClaimTokens';
import { OverallStats } from '../components/OverallStats';
import { ContractLink } from '../components/ContractLink';

// Contexts
import { GlobalContext } from './Main';

// Custom hooks
import { useLifTokens } from '../hooks/useLifTokens';
import { useBalances } from '../hooks/useBalances';

// Utils
import { zero, isZero } from '../utils/numbers';

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

export const Swap = () => {
  const {
    isRightNetwork,
    provider,
    logOut,
    account,
    isConnecting,
    setScreenState
  } = useContext(GlobalContext);
  const lifTokens = useLifTokens(
    provider,
    contracts.lif,
    contracts.lif2
  );
  const balances = useBalances(
    lifTokens,
    account,
    isRightNetwork && !isConnecting
  );

  useEffect(() => {
    if (!balances.isClaimed || (balances.isClaimed && !isZero(balances.lif))) {
      setScreenState(1);
    } else if (balances.isClaimed && isZero(balances.lif)) {
      setScreenState(2);
    } else {
      setScreenState(0);
    }
  }, [balances, setScreenState]);

  if (!account) {
    return null;
  }

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
        isEnabled={!isConnecting && isRightNetwork}
      />
      <ClaimTokens
        provider={provider}
        lifTokens={lifTokens}
        balances={balances}
        isEnabled={!isConnecting && isRightNetwork}
      />
      {lifTokens && balances.lif2.gt(zero) &&
        <OverallStats
          lifTokens={lifTokens}
        />
      }
    </>
  );
};
