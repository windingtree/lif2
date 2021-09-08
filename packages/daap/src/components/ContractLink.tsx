import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Icons
import CopySvg from '../assets/copy.svg';

// Custom components
import { Tooltip } from './Tooltip';

// Utils
import { copyToClipboard, centerEllipsis } from '../utils/strings';

export interface ContractLinkProps {
  address?: string;
}

const ContractWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContractTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  color: rgb(${colors.dark});
`;

const ContractAddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: rgba(${colors.green},0.2);
  border-radius: 16px;
  margin-bottom: 16px;
`;

const ContractAddress = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(${colors.dark});
`;

const AddressFull = styled.span`
  @media (max-width: ${responsive.sm}) {
    display: none;
  }
`;

const AddressEllipsis = styled.span`
  @media (min-width: ${responsive.sm}) {
    display: none;
  }
`;

const CopyIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-bottom: -1px;
`;

export const ContractLink = ({ address }: ContractLinkProps) => {
  if (!address) {
    return null;
  }

  return (
    <ContractWrapper>
      <ContractTitle>
        Contract address
      </ContractTitle>
      <ContractAddressWrapper>
        <ContractAddress>
          <AddressFull>
            {address}
          </AddressFull>
          <AddressEllipsis>
            {centerEllipsis(address, 8)}
          </AddressEllipsis>
        </ContractAddress>
        <Tooltip
          tooltip='Copied!'
          onClick={() => copyToClipboard(address)}
        >
          <CopyIcon src={CopySvg}/>
        </Tooltip>
      </ContractAddressWrapper>
    </ContractWrapper>
  );
};
