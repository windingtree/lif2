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
  top: -12px;
  left: 10px;
  border-radius: 4px;
  padding: 2px;
  font-size: 12px;
  color: rgb(${colors.dark});
  background-color: rgb(${colors.white});
  box-shadow: 2px 2px 2px rgba(${colors.dark},0.2);
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
        delay || 400
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
