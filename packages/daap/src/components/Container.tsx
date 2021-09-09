import styled, { keyframes } from 'styled-components';

// Styles
import { colors } from '../styles';

export type TitleStyle =
  | 'purple'
  | 'black';

export interface ContainerProps {
  title?: string;
  titleStyle?: TitleStyle;
  isLoading?: boolean;
  children: any;
}

export interface ContainerWrapperProps {
  isLoading?: boolean;
}

const shineAnimation = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 24px;
  background-color: rgb(${colors.white});
  overflow: hidden;

  &:before {
    ${({ isLoading }: ContainerWrapperProps) => (
      isLoading ? '' : 'display: none;'
    )}
    content: "";
    position: absolute;
    overflow: visible;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 24px;
    background-size: 200% 100%;
    background-image: linear-gradient(110deg, rgba(${colors.grey},0.2) 8%, rgba(${colors.white},0.8) 18%, rgba(${colors.grey},0.2) 33%);
    animation: 1.5s ${shineAnimation} linear infinite;
  }
`;

export const ContainerSpacer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  ${({ titleStyle }: ContainerProps) => (
    titleStyle === 'purple'
      ? `
        margin-bottom: 42px;
        font-size: 42px;
        font-weight: bold;
        color: rgb(${colors.purple});
      `
      : `
        margin-bottom: 24px;
        font-size: 24px;
        color: rgb(${colors.black});
      `
  )}
`;

export const Container = ({ title, titleStyle, isLoading, children }: ContainerProps) => (
  <ContainerWrapper isLoading={isLoading}>
    {title &&
      <Title titleStyle={titleStyle}>
        {title}
      </Title>
    }
    {children}
  </ContainerWrapper>
);
