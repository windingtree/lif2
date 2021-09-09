import styled from 'styled-components';

// Styles
import { colors, responsive } from '../styles';

// Icons
import LogoBaseIcon from '../assets/logo-base.svg';
import TelegramIcon from '../assets/telegram.svg';

// Custom components
import { GreenLine } from './Decor';

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

const Telegram = styled.div`
  font: inherit;
  padding-left: 21px;
  background-image: url(${TelegramIcon});
  background-size: 15px 13px;
  background-position: 0 center;
  background-repeat: no-repeat;
  a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(${colors.dark});
  }
`;

export const Footer = () => (
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
      <Telegram>
        <a
          href='https://t.me/windingtree'
        >
          Discuss in Winding Tree Telegram
        </a>
      </Telegram>
    </MenuWrapper>
  </FooterWrapper>
);
