import type { Lif2Token } from '@windingtree/lif2-token-core';
import styled, { keyframes } from 'styled-components';

// Styles
import { colors } from '../styles';

// Custom hooks
import { useSupply } from '../hooks/useSupply';

// Utils
import { etherString } from '../utils/numbers';

export interface OverallStatsProps {
  lifTokens: Lif2Token | undefined;
}

export  interface ProgressBarProps {
  width: number;
}

const OverallStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 24px 0 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgb(${colors.dark});
`;

const SuppliesBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 28px;
`;

const SupplyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  div {
    font-size: 22px;
    font-weight: normal;
    color: rgb(${colors.dark});
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 20px 0 30px 0;
`;

const Progress = styled.progress`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  left: -777px;
`;

const ProgressValue = styled.div`
  color: rgb(${colors.dark});
  display: block;
  line-height: 21px;
  text-align: center;
`;

const ProgressBg = styled.div`
  background-color: rgb(${colors.light});
  position: relative;
  height: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

const progressAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -40px 0;
  }
`;

const ProgressBar = styled.div`
  overflow: hidden;
  background-color: rgb(${colors.purple});
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  border-radius: 8px;
  &:after {
    animation: ${progressAnimation} 0.8s linear infinite;
    background-size: 40px 40px;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${({ width }: ProgressBarProps) => (`width: ${width}%;`)}
`;

export const OverallStats = ({ lifTokens }: OverallStatsProps) => {
  const [
    totalSupply,
    claimedTokens,
    claimedPercents
  ] = useSupply(lifTokens);

  if (!lifTokens) {
    return null;
  }

  return (
    <OverallStatsWrapper>
      <Title>
        Overall LÍF migration stats so far:
      </Title>
      <SuppliesBlock>
        <SupplyRow>
          <div>
            Total supply:
          </div>
          <div>
            {etherString(totalSupply)}
          </div>
        </SupplyRow>
        <SupplyRow>
          <div>
            Tokens claimed:
          </div>
          <div>
            {etherString(claimedTokens)}
          </div>
        </SupplyRow>
      </SuppliesBlock>
      <ProgressWrapper>
        <Progress max='100' value={claimedPercents}></Progress>
        <ProgressValue>
          {claimedPercents}%
        </ProgressValue>
        <ProgressBg><ProgressBar width={claimedPercents}></ProgressBar></ProgressBg>
      </ProgressWrapper>
    </OverallStatsWrapper>
  );
};
