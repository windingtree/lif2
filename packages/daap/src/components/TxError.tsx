import styled from 'styled-components';

// Styles
import { colors } from '../styles';

export interface TxErrorProps {
  message: any;
}

export const TxErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: rgb(${colors.red});
  margin-top: 10px;
`;

const parseMessage = (message: string) => {
  const clearedJson = /\{.*\}/.exec(message);
  if (clearedJson && clearedJson.length === 1) {
    try {
      const parsedMessage = JSON.parse(clearedJson[0]);
      return parsedMessage?.value?.data?.message;
    } catch (error) {
      //
      return message;
    }
  }
  return message;
};

export const TxError = ({ message }: TxErrorProps) => (
  <TxErrorWrapper>
    {parseMessage(message)}
  </TxErrorWrapper>
);
