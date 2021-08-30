import styled from 'styled-components';

// Styles
import { colors } from '../styles';

export type TitleStyle =
  | 'purple'
  | 'black';

export interface ContainerProps {
  title?: string;
  titleStyle?: TitleStyle;
  children: any;
}

const ContainerWrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 24px;
padding: 24px;
background-color: rgb(${colors.white});
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

export const Container = ({ title, titleStyle, children }: ContainerProps) => (
  <ContainerWrapper>
    {title &&
      <Title titleStyle={titleStyle}>
        {title}
      </Title>
    }
    {children}
  </ContainerWrapper>
);
