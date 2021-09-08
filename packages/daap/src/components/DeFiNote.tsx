import styled from 'styled-components';

// Styles
import { colors } from '../styles';

const BlockWrapper = styled.div``;

const Note = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgb(${colors.black});
  margin-top: 16px;
`;

export const DeFiNote = () => {

  return (
    <BlockWrapper>
      <Note>
        Every next claim process is a separate transaction & gas fee so, If you have LÍF tokens in DeFi liquidity pools, or DEX’s withdraw them to your balance before proceeding
      </Note>
    </BlockWrapper>
  )
};
