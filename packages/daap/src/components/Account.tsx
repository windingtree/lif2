import styled from 'styled-components';
import Blockies from 'react-blockies';

// Utils
import { centerEllipsis, copyToClipboard } from '../utils/strings';

// Styles
import { colors } from '../styles';

// Custom components
import { Tooltip } from './Tooltip';

export interface AccountProps {
  address: string;
}

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(117.13deg, #D0F6EB 16.38%, rgba(208, 246, 235, 0) 88.99%);
  border-radius: 16px;
  padding: 8px 12px;
  cursor: pointer;
`;

const Address = styled.div`
  color: rgb(${colors.dark});
  font-size: 24px;
`;

const Icon = styled(Blockies)`
  border-radius: 50%;
  margin-left: 8px;
`;

export const Account = ({ address }: AccountProps) => {
  if (!address) {
    return null;
  }

  return (
    <Tooltip
      tooltip={'Copied!'}
      onClick={() => copyToClipboard(address)}
    >
      <AccountWrapper>
        <Address>
          {centerEllipsis(address)}
        </Address>
        <Icon
          seed={address}
          size={7}
          scale={4}
        />
      </AccountWrapper>
    </Tooltip>
  );
};
