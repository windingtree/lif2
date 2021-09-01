import type { BigNumber } from 'ethers';
import styled from 'styled-components';

// Styles
import { colors } from '../styles';

// Icons
import UniswapSvg from '../assets/uniswap.svg';
import EtherDeltaSvg from '../assets/etherDelta.svg';
import IdexPng from '../assets/idex.png';

// Custom components
import { GreenLine } from '../components/Decor';

// Utils
import { etherString } from '../utils/numbers';

export interface DeFiProps {
  uniswapV2Balance: BigNumber;
  idexBalance: BigNumber;
  etherDeltaBalance: BigNumber;
}

export interface BalanceBlockProps {
  value: BigNumber;
  title: string;
  icon: string;
}

const BlockWrapper = styled.div``;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 400;
  color: rgb(${colors.purple});
  margin-bottom: 10px;
`;

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Balance = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: rgb(${colors.dark});
  margin-bottom: 10px;
`;

const ProtocolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProtocolTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: rgb(${colors.dark});
`;

const ProtocolIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const Note = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgb(${colors.dark});
  margin-bottom: 16px;
`;

const BalanceBlock = ({
  value,
  title,
  icon
}: BalanceBlockProps) => (
  <BalanceWrapper>
    <Balance>
      {etherString(value)}&nbsp;LÍF
    </Balance>
    <ProtocolWrapper>
      <ProtocolTitle>
        {title}
      </ProtocolTitle>
      <ProtocolIcon
        src={icon}
      />
    </ProtocolWrapper>
  </BalanceWrapper>
);

export const DeFi = ({
  uniswapV2Balance,
  idexBalance,
  etherDeltaBalance
}: DeFiProps) => {
  if (
    uniswapV2Balance.isZero() &&
    idexBalance.isZero() &&
    etherDeltaBalance.isZero()
  ) {
    return null;
  }

  return (
    <BlockWrapper>
      <Title>
        Locked in liquidity pools
      </Title>
      {!uniswapV2Balance.isZero() &&
        <BalanceBlock
          value={uniswapV2Balance}
          title='Uniswap V2'
          icon={UniswapSvg}
        />
      }
      {!idexBalance.isZero() &&
        <BalanceBlock
          value={idexBalance}
          title='IDEX'
          icon={IdexPng}
        />
      }
      {!etherDeltaBalance.isZero() &&
        <BalanceBlock
          value={etherDeltaBalance}
          title='EtherDelta'
          icon={EtherDeltaSvg}
        />
      }
      <Note>
        Withdraw your tokens from liquidity pools and other DeFi projects to convert them to new Lif tokens
      </Note>
      <GreenLine />
    </BlockWrapper>
  )
};
