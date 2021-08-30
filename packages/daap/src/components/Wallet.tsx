import styled from 'styled-components';
import { ethers } from 'ethers';

// Custom hooks
import { useAccount } from '../hooks/useAccount';

// Custom components
import { Account } from './Account';

export interface WalletProps {
  provider: ethers.providers.Web3Provider | undefined;
  connect: Function,
  disconnect: Function
}

const WalletWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: inline-block;
  align-items: center;
  padding: 5px;
`;

export const Wallet = ({
  provider,
  connect,
  disconnect
}: WalletProps) => {
  const account = useAccount(provider);

  return (
    <WalletWrapper>
      {account &&
        <Account address={account} />
      }
      {provider &&
        <button
          onClick={disconnect as any}
        >
          Disconnect
        </button>
      }
    </WalletWrapper>
  );
};

