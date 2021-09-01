import styled from 'styled-components';

// Styles
import { colors } from '../styles';
import { responsive } from '../styles';

// Icons
import VectorOutSvg from '../assets/VectorOut.svg';

export interface EtherscanLinkProps {
  blockExplorer: string;
  transactionHash: string;
}

const EtherscanLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  color: rgb(${colors.dark});
  margin-top: 10px;
  a {
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    &:visited {
      color: rgb(${colors.dark});
    }
  }

  @media (max-width: ${responsive.sm}) {
    font-size: 18px;
  }
`;

const EtherscanIcon = styled.img`
  width: 13px;
  height : 13px;
  margin-left: 10px;
`;

export const EtherscanLink = ({
  blockExplorer,
  transactionHash
}: EtherscanLinkProps) => (
  <EtherscanLinkWrapper>
    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
    <a
      href={`${blockExplorer}/tx/${transactionHash}`}
      title='Transaction on Etherscan'
      target='_blank'
      rel='noopener noreferrer'
    >
      {'View transaction on\u00A0Etherscan'}
    </a>
    <a
      href={`${blockExplorer}/tx/${transactionHash}`}
      title='Transaction on Etherscan'
      target='_blank'
      rel='noopener noreferrer'
    >
      <EtherscanIcon
        src={VectorOutSvg}
      />
    </a>
  </EtherscanLinkWrapper>
);
