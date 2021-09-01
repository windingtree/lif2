import type { BigNumberish } from 'ethers';
import styled from 'styled-components';
import { utils, BigNumber as BN } from 'ethers';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Icons
import LifIcon from '../assets/lif.svg'
import Lif2Icon from '../assets/lif2.svg'

export type TokenType =
  | 'old'
  | 'new';

export interface BalanceProps {
  balance: BigNumberish | undefined;
  kind: TokenType;
  title?: string;
}

export interface BalanceWrapperProps {
  kind: TokenType;
}

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${
    ({ kind }: BalanceWrapperProps) => (kind === 'old' ? '40' : '32')
  }px;

  @media (max-width: ${responsive.sm}) {
    font-size: ${
      ({ kind }: BalanceWrapperProps) => (kind === 'old' ? '34' : '26')
    }px;
  }
`;

const BalanceValue = styled.div`
  display: flex;
  align-items: center;
  color: rgb(${colors.black});
  font-size: inherit;
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

export const Balance = ({ balance, kind, title }: BalanceProps) => (
  <>
    {title &&
      <Title>
        {title}
      </Title>
    }
    <BalanceWrapper kind={kind}>
      <BalanceValue>
        {utils.formatEther(balance || BN.from(0))}
      </BalanceValue>
      <IconWrapper>
        <Name>
          {kind === 'old' ? 'LÍF' : 'LÍF2'}
        </Name>
        <Icon
          src={kind === 'old' ? LifIcon : Lif2Icon}
          width='40px'
          height='40px'
          alt='Lif Token Icon'
        />
      </IconWrapper>
    </BalanceWrapper>
  </>
);
