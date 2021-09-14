import { useEffect, useContext } from 'react';
import styled from 'styled-components';

// Icons
import LifSvg from '../assets/lif.svg'
import Lif2Svg from '../assets/lif2.svg'
import VectorLeftSvg from '../assets/VectorLeft.svg'

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Custom components
import { Container } from '../components/Container';
import { Button } from '../components/Buttons';

// Contexts
import { GlobalContext } from './Main';

const HelloTitle = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: rgb(${colors.dark});

  @media (max-width: ${responsive.sm}) {
    margin: 0 26px 0 26px;
  }
`;

const WelcomeText = styled.div`
  margin: 42px 28px 42px 28px;
  font-size: 20px;
  line-height: 16px;
  p {
    color: rgb(${colors.dark});
  }
  a {
    color: rgb(${colors.purple});
    text-decoration: none;
    cursor: pointer;
    &:visited {
      color: rgb(${colors.purple});
    }
  }

  @media (max-width: ${responsive.sm}) {
    margin: 32px 26px 32px 26px;
  }
`;

const IconsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
`;

const TokenName = styled.div`
  font-size: 24px;
`;

const TokenIcon = styled.img`
  width: 80px;
  height : 80px;

  @media (max-width: ${responsive.sm}) {
    width: 60px;
    height : 60px;
  }
`;

const VectorIcon = styled(TokenIcon)`
  width: 14px;
  height : 34px;
`;

const StopConnecting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: rgb(${colors.dark});
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-color: rgba(${colors.black},0.7);
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const Hello = () => {
  const {
    injectedProvider,
    account,
    logIn,
    logOut,
    isConnecting,
    setScreenState
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!account) {
      setScreenState(0);
    }
  }, [account, setScreenState]);

  if (account) {
    return null;
  }

  return (
    <>
      <HelloTitle>
        Hello!
      </HelloTitle>
      <WelcomeText>
        <p>
          Winding Tree is upgrading LIF token to LIF v2
        </p>
        <a
          href='https://blog.windingtree.com/lif-token-upgrade-fa07387a7ba7'
          title='Lif Token Upgrade'
          target='_blank'
          rel='noopener noreferrer'>
          Read our blog article to learn why
        </a>
      </WelcomeText>
      <Container
        title='Claim your new LIF'
        titleStyle='purple'
      >
        <IconsBlock>
          <TokenIcon
            src={LifSvg}
          />
          <TokenName>
            LÍF
          </TokenName>
          <VectorIcon
            src={VectorLeftSvg}
          />
          <TokenName>
            LIF
          </TokenName>
          <TokenIcon
            src={Lif2Svg}
          />
        </IconsBlock>
        <Button
          color='purple'
          onClick={logIn}
          progress={isConnecting}
        >
          {
            isConnecting
              ? `Connecting to ${
                injectedProvider && injectedProvider.name
                  ? injectedProvider.name
                  : 'wallet'
              }`
              : 'Connect a wallet'
          }
        </Button>
        {isConnecting &&
          <StopConnecting
            onClick={() => logOut()}
          >
            Stop connecting
          </StopConnecting>
        }
      </Container>
    </>
  );
}
