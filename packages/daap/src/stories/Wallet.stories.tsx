import type { Web3ModalConfig } from '../hooks/useWeb3Modal';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { getNetwork, getInfuraId } from '../config';

import { Wallet } from '../components/Wallet';

// Custom hooks
import { useWeb3Modal } from '../hooks/useWeb3Modal';

const network = getNetwork(); // Target network
const web3ModalConfig: Web3ModalConfig = {
  network: network.name,
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: getInfuraId()
      }
    }
  }
};

const Template: ComponentStory<typeof Wallet> = () => {
  const [provider, logIn, logOut] = useWeb3Modal(web3ModalConfig);

  return (
    <Wallet
      provider={provider}
      connect={logIn}
      disconnect={logOut}
    />
  );
};

export const Primary = Template.bind({});

export default {
  title: 'Components/Wallet',
  component: Wallet,
} as ComponentMeta<typeof Wallet>;
