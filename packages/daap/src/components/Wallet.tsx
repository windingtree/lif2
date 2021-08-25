import styled from 'styled-components';
import { ethers } from 'ethers';

// Custom hooks
import { useAccount } from '../hooks/useAccount';

const Button = styled.button`
  display: inline-block;
  align-items: center;
  padding: 5px;
`;

const Address = styled.span`
  display: inline-block;
  align-items: center;
  padding: 5px;
`;

export interface WalletProps {
  provider: ethers.providers.Web3Provider | undefined;
  connect: () => void,
  disconnect: () => void
}

export const Wallet = ({
  provider,
  connect,
  disconnect
}: WalletProps) => {
  const account = useAccount(provider);

  return (
    <div>
      {account &&
        <Address>
          {account}
        </Address>
      }
      {!provider &&
        <Button
          onClick={connect}
        >
          Connect Wallet
        </Button>
      }
      {provider &&
        <Button
          onClick={disconnect}
        >
          Disconnect
        </Button>
      }
    </div>
  );
};

