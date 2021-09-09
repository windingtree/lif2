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

export const Hello = () => {
  const {
    account,
    logIn,
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
        Winding Tree is undergoing a Token Swap.
        </p>
        <a href='#tbs' title='LIF tokens swap' target='_blank' rel='noopener noreferrer'>
          Learn why
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
          Connect a wallet
        </Button>
      </Container>
    </>
  );
}
