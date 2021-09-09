import styled, { keyframes } from 'styled-components';

// Icons
import LockedSvg from '../assets/Locked.svg'
import UnlockedSvg from '../assets/Unlocked.svg'
import UnlockingSvg from '../assets/Unlocking.svg'

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

export type ButtonColor =
  | 'green'
  | 'purple';

export interface ButtonProps {
  children: any;
  color: ButtonColor;
  onClick?: Function;
  locked?: boolean;
  disabled?: boolean;
  progress?: boolean;
}

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: flex-start;
  border-radius: 24px;
  outline: none;
  padding: 24px 32px;
  cursor: pointer;
  background-color: ${({ color }: ButtonProps) => (
    color === 'purple'
      ? `rgb(${colors.purple})`
      : `rgb(${colors.green})`
  )};
  background: ${({ locked }: ButtonProps) => (
    locked !== undefined && !locked
      ? 'linear-gradient(117.13deg, #D0F6EB 16.38%, rgba(208, 246, 235, 0) 88.99%);'
      : ''
  )};
  font-size: 30px;
  font-weight: bold;
  color: rgb(${({ color, disabled }: ButtonProps) => (
    disabled
      ? colors.dark
      : color === 'purple'
        ? colors.white
        : colors.black
  )});
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ locked }: ButtonProps) => (
      locked !== undefined && !locked
        ? ''
        : `rgb(${colors.grey})`
    )};
  }
  &:hover {
    box-shadow: 1px 1px 3px rgba(${colors.black},0.2);
    &:disabled {
      box-shadow: none;
    }
  }
  &:active {
    box-shadow: inset 0px 0px 16px rgba(${colors.black},0.2);
    &:disabled {
      box-shadow: none;
    }
  }

  div {
    text-align: left;
  }

  @media (max-width: ${responsive.sm}) {
    padding: 14px 22px;
    font-size: 22px;
  }

  transition: background-color 100ms;
`;

const Content = styled.div`
  font: inherit;
`;

const Icon = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 12px;
`;

const LockedIcon = styled(Icon)`
  width: 36px;
  height : 33px;
  background-image: url(${LockedSvg});
`;

const UnlockingIcon = styled(Icon)`
  width: 36px;
  height : 33px;
  background-image: url(${UnlockingSvg});
`;

const UnlockedIcon = styled(Icon)`
  width: 28px;
  height : 33px;
  background-image: url(${UnlockedSvg});
`;

const animationEllipsis = keyframes`
  0% {
    background: rgba(${colors.dark},0.1);
  }
  100% {
    background: rgba(${colors.dark},1);
  }
`;

const ProgressSign = styled.span`
  font: inherit;
  vertical-align: bottom;
  width: 25px;
  margin-left: 3px;

  span {
    background-color: transparent;
    border-radius: 50%;
    display: inline-block;
    height: 5px;
    width: 5px;
    margin-right: 4px;
    animation: ${animationEllipsis} steps(10,end) 800ms infinite;

    @media (max-width: ${responsive.sm}) {
      height: 4px;
      width: 4px;
      margin-right: 3px;
    }

    &:last-child {
      margin-right: 0px;
    }

    &.two {
      animation-delay: 200ms;
    }

    &.three {
      animation-delay: 400ms;
    }
  }
`;

export const Button = ({
  children, color, locked, disabled, progress, onClick
}: ButtonProps) => (
  <ButtonWrapper
    color={color}
    locked={locked}
    disabled={disabled || progress}
    onClick={onClick as any}
  >
    {(locked !== undefined && locked && !progress) &&
      <LockedIcon />
    }
    {(locked !== undefined && locked && progress) &&
      <UnlockingIcon />
    }
    {(locked !== undefined && !locked) &&
      <UnlockedIcon />
    }
    <Content>
      {children}
      {progress &&
        <ProgressSign>
          <span className='one'></span>
          <span className='two'></span>
          <span className='three'></span>
        </ProgressSign>
      }
    </Content>
  </ButtonWrapper>
);
