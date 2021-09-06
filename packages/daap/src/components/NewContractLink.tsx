import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Icons
import CopySvg from '../assets/copy.svg';

// Custom components
import { Tooltip } from '../components/Tooltip';

// Utils
import { copyToClipboard, centerEllipsis } from '../utils/strings';

export interface NewContractLinkProps {
  address?: string;
}

const NewContractWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

const ContractTitle = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const ContractAddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background: linear-gradient(117.13deg, #E1F9F2 16.38%, rgba(86, 241, 196, 0) 88.99%);
  border-radius: 16px;
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
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export const NewContractLink = ({ address }: NewContractLinkProps) => {
  if (!address) {
    return null;
  }

  return (
    <NewContractWrapper>
      <ContractTitle>
        New contract
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
    </NewContractWrapper>
  );
};
