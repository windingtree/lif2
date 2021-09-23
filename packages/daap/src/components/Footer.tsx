import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import { useCallback } from 'react';
import styled from 'styled-components';
import { getContractsAddresses } from '../config';

// Styles
import { colors } from '../styles';

// Icons
import LogoBaseIcon from '../assets/logo-base.svg';
import TelegramIcon from '../assets/telegram.svg';
import LifIcon from '../assets/lif2.svg';
import Lif2Png from '../assets/lif2.png';

// Custom components
import { GreenLine } from './Decor';

// Custom hooks
import { useRegisterToken } from '../hooks/useRegisterToken';

export interface FooterProps {
  provider: Web3ModalProvider | undefined
}

// Config
const { lif2 } = getContractsAddresses();

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 40px;
  z-index: 9999;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  color: rgb(${colors.dark});
  margin-top: 54px;
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Copy = styled.div`
  font: inherit;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Telegram = styled.div`
  font: inherit;
  padding-left: 21px;
  background-image: url(${TelegramIcon});
  background-size: 15px 13px;
  background-position: 0 center;
  background-repeat: no-repeat;
  margin-bottom: 7px;
  a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(${colors.dark});
  }
`;

const AddLif = styled.div`
  font: inherit;
  padding-left: 21px;
  background-image: url(${LifIcon});
  background-size: 15px 13px;
  background-position: 0 center;
  background-repeat: no-repeat;
  a, span {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(${colors.dark});
    cursor: pointer;
  }
`;

export const Footer = ({ provider }: FooterProps) => {
  const registrationCallback = useRegisterToken(
    provider,
    lif2,
    'LIF',
    18,
    Lif2Png
  );

  const registerToken = useCallback(async () => {
    try {
      await registrationCallback();
    } catch (error) {}
  }, [registrationCallback]);

  return (
    <FooterWrapper>
      <GreenLine thin={true} />
      <MenuWrapper>
        <Copy>
          © Winding Tree 2021<br />
          <Spacer />
          <a
            href='https://windingtree.com'
          >
            <img
              alt='Winding Tree'
              src={LogoBaseIcon}
              width='114px'
              height='40px'
            />
          </a>
        </Copy>
        <LinksWrapper>
          <Telegram>
            <a
              href='https://t.me/windingtree'
            >
              Discuss in Winding Tree Telegram
            </a>
          </Telegram>
          <AddLif>
            <span
              onClick={registerToken}
            >
              Add new LIF to your wallet
            </span>
          </AddLif>
        </LinksWrapper>
      </MenuWrapper>
    </FooterWrapper>
  );
};
