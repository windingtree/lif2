import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { LifTokensBalances } from '../hooks/useBalances';
import type { BigNumber } from 'ethers';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Logger from '../utils/logger';
import { getContractsAddresses, getNetwork } from '../config';

// Icons
import Lif2Png from '../assets/lif2.png';

// Custom components
import { Button } from './Buttons';
import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { EtherscanLink } from '../components/EtherscanLink';
import { TxError } from '../components/TxError';
import { Congratulations } from '../components/Congratulations';

// Utils
import { isZero, etherString } from '../utils/numbers';

// Custom hooks
import { useAllowance } from '../hooks/useAllowance';
import { useSigner } from '../hooks/useSigner';
import { useRegisterToken } from '../hooks/useRegisterToken';

// Initialize logger
const logger = Logger('UnlockTokens');

// Config
const { lif2 } = getContractsAddresses();
const network = getNetwork();

export interface ClaimTokensProps {
  lifTokens: Lif2Token | undefined;
  provider: Web3ModalProvider | undefined;
  balances: LifTokensBalances,
  isRightNetwork: boolean
}

export interface ClaimTokensState {
  label: Function;
  disabled: boolean;
  progress?: boolean;
}

// The components' states
export const states: ClaimTokensState[] = [
  {
    label: () => 'Claim LÍF2',
    disabled: true
  },
  {
    label: (balance: BigNumber) => `Claim ${etherString(balance)}\u00A0LÍF2`,
    disabled: false
  },
  {
    label: () => 'Claiming the\u00A0tokens',
    disabled: true,
    progress: true
  },
  {
    label: () => 'Claimed',
    disabled: true
  }
];

const getStateByIndex = (index: number): ClaimTokensState => states[index];

export const ClaimTokens = (
  {
    provider,
    lifTokens,
    balances,
    isRightNetwork
  }: ClaimTokensProps
) => {
  const [error, setError] = useState<string | null>(null);
  const [signer, account] = useSigner(provider);
  const [stateIndex, setStateIndex] = useState(account && !isZero(balances.lif) ? 1 : 0);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [showRegisterToken, setShowRegisterToken] = useState(false);
  const [registerTokenProgress, setRegisterTokenProgress] = useState(false);

  const state = useMemo(() => {
    const newState = getStateByIndex(stateIndex)
    logger.debug('New state', newState);
    return newState;
  }, [stateIndex]);

  const allowance = useAllowance(lifTokens, account, lif2, isRightNetwork);

  useEffect(() => {
    if (
      !isZero(balances.lif) &&
      allowance.gte(balances.lif) &&
      stateIndex < 2
    ) {
      logger.debug('allowance', allowance.toString());
      logger.debug('balance', balances.lif.toString());
      logger.debug('Already allowed');
      setStateIndex(1);
    }
  }, [stateIndex, account, balances, allowance]);

  const claimTokens = useCallback(async () => {
    try {
      setError(null);
      setTransactionHash(null);

      if (!lifTokens || !signer) {
        return;
      }

      setStateIndex(2);
      await lifTokens.claim(
        signer,
        tx => setTransactionHash(tx.hash)
      );
      setTimeout(() => {
        setStateIndex(3);
        setShowRegisterToken(true);
      }, 2000);
    } catch (error) {
      logger.error(error);
      setError(error.message);
      setStateIndex(1);
    }
  }, [lifTokens, signer]);

  const registrationCallback = useRegisterToken(
    provider,
    lif2,
    'LÍF2',
    18,
    Lif2Png
  );

  // Token registration flow
  const registerToken = useCallback(async () => {
    try {
      setRegisterTokenProgress(true);
      await registrationCallback();
      setRegisterTokenProgress(false);
      setShowRegisterToken(false);
    } catch (error) {
      setError(error);
      logger.error(error);
      setRegisterTokenProgress(false);
    }
  }, [registrationCallback]);

  return (
    <>
      <Container title='New tokens'>
        <Balance
          balance={balances.lif2}
          kind='new'
        />
        {(
          !showRegisterToken &&
          stateIndex < 3 &&
          !isZero(balances.lif)
        ) &&
          <Button
            onClick={claimTokens}
            color='green'
            disabled={state.disabled}
            progress={state.progress}
          >
            {state.label(balances.lif)}
          </Button>
        }
        {showRegisterToken &&
          <Button
            color='purple'
            onClick={registerToken}
            progress={registerTokenProgress}
          >
            Add to your wallet
          </Button>
        }
        {transactionHash &&
          <EtherscanLink
            blockExplorer={network.blockExplorer}
            transactionHash={transactionHash}
          />
        }
        {error &&
          <TxError message={error}/>
        }
      </Container>
      {stateIndex === 3 &&
        <Congratulations lifTokens={lifTokens} />
      }
    </>
  );
};
