import styled from 'styled-components';

// Styles
import { colors } from '../styles';

// Custom components
import { GreenLine } from '../components/Decor';

const BlockWrapper = styled.div``;

const Note = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgb(${colors.dark});
  margin-bottom: 16px;
`;

export const DeFiNote = () => {

  return (
    <BlockWrapper>
      <Note>
      If any of your Lif tokens are locked in the DeFi liquidity pools or somewhere, please withdraw them back to your account before you start claiming process.
      </Note>
      <GreenLine />
    </BlockWrapper>
  )
};
