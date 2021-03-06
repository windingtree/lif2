import type { BigNumber } from 'ethers';
import styled from 'styled-components';
import { BigNumber as BN } from 'ethers';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Icons
import LifIcon from '../assets/lif.svg';
import Lif2Icon from '../assets/lif2.svg';

// Utils
import { etherString } from '../utils/numbers';

export type TokenType =
  | 'old'
  | 'new';

export interface BalanceProps {
  balance: BigNumber | undefined;
  kind: TokenType;
  title?: string;
  isUnlock?: boolean;
}

export interface BalanceWrapperProps {
  kind: TokenType;
}

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 34px;

  @media (max-width: ${responsive.sm}) {
    font-size: 26px;
  }
`;

const BalanceValue = styled.div`
  display: flex;
  align-items: center;
  color: rgb(${colors.black});
  font-size: inherit;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  margin-left: 8px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: rgb(${colors.black});
  font-size: 24px;
`;

const Name = styled.div`
  font-size: inherit;
`;

export const Balance = ({ balance, kind, title, isUnlock }: BalanceProps) => (
  <>
    {title &&
      <Title>
        {title}
      </Title>
    }
    <BalanceWrapper>
      <BalanceValue>
        {etherString(balance || BN.from(0))}
      </BalanceValue>
      <IconWrapper>
        <Name>
          {kind === 'old' ? 'LÍF' : isUnlock ? '' : (<strong>LIF</strong>)}
        </Name>
        {!isUnlock &&
          <Icon
            src={kind === 'old' ? LifIcon : Lif2Icon}
            width='40px'
            height='40px'
            alt='Lif Token Icon'
          />
        }
      </IconWrapper>
    </BalanceWrapper>
  </>
);
