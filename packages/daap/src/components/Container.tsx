import styled from 'styled-components';

// Styles
import { colors } from '../styles';

export interface ContainerProps {
  title: string;
  children: any;
}

const ContainerWrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 24px;
padding: 24px;
margin-top: 40px;
background-color: rgb(${colors.white});
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: rgb(${colors.black});
  font-size: 24px;
`;

export const Container = ({ title, children }: ContainerProps) => (
  <ContainerWrapper>
    <Title>
      {title}
    </Title>
    {children}
  </ContainerWrapper>
);
