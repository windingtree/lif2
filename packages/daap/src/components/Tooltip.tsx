import { useState } from 'react';
import styled from 'styled-components';

// Styles
import { colors } from '../styles';

export interface TooltipProps {
  tooltip: string;
  children: any;
  onClick: Function;
  delay?: number;
}

const TooltipWrapper = styled.div`
  position: relative;
`;

const TooltipContent = styled.div`
  position: absolute;
  top: -28px;
  left: 10px;
  border-radius: 4px;
  padding: 4px;
  font-size: 16px;
  color: rgb(${colors.dark});
  background-color: rgb(${colors.white});
  border: 1px solid rgba(${colors.dark},0.3);
  box-shadow: 1px 1px 1px rgba(${colors.dark},0.3);
  cursor: pointer;
`;

export const Tooltip = ({
  tooltip,
  children,
  delay,
  onClick
}: TooltipProps) => {
  const [activeTip, setActiveTip] = useState<NodeJS.Timeout | null>(null);

  const showTip = () => {
    setActiveTip(
      setTimeout(
        () => setActiveTip(null),
        delay || 1000
      )
    );
  };

  const hideTip = () => {
    clearInterval(activeTip as NodeJS.Timeout);
    setActiveTip(null);
  };

  return (
    <TooltipWrapper
      onClick={() => {
        onClick();
        showTip();
      }}
    >
      {activeTip &&
        <TooltipContent
          onClick={hideTip}
        >
          {tooltip}
        </TooltipContent>
      }
      {children}
    </TooltipWrapper>
  );
};
