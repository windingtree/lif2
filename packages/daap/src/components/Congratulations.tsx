import styled from 'styled-components';

// Styles
import { colors } from '../styles';

// Custom components
import { FireWorks } from '../components/FireWorks';

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 24px 0 24px;
`;

const Title = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 500;
  line-height: 35px;
  color: rgb(${colors.purple});
  margin-bottom: 40px;
`;

export const Congratulations = () => (
  <BlockWrapper>
    <FireWorks duration={15000} />
    <Title>
      Congratulations!<br/>
      All your LÍF is now in new tokens
    </Title>
  </BlockWrapper>
);
