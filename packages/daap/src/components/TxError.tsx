import styled from 'styled-components';

// Styles
import { colors } from '../styles';

export const TxError = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: rgb(${colors.red});
  margin-top: 10px;
`;
