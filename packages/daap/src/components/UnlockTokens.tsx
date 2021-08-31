import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import type { Lif2Token } from '@windingtree/lif2-token-core';
import { LifTokensBalances } from '../hooks/useBalances';
import type { BigNumber } from 'ethers';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Logger from '../utils/logger';
import { getContractsAddresses, getNetwork } from '../config';

// Custom components
import { Button } from '../components/Buttons';
import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { GreenLine, VectorDown } from '../components/Decor';
import { EtherscanLink } from '../components/EtherscanLink';
import { TxError } from '../components/TxError';

// Utils
import { isZero, etherString } from '../utils/numbers';

// Custom hooks
import { useAllowance } from '../hooks/useAllowance';
import { useSigner } from '../hooks/useSigner';

// Initialize logger
const logger = Logger('UnlockTokens');

// Config
const { lif2 } = getContractsAddresses();
const network = getNetwork();

export interface UnlockTokensProps {
  lifTokens: Lif2Token | undefined;
  provider: Web3ModalProvider | undefined;
  balances: LifTokensBalances
}

export interface UnlockTokensState {
  label: Function;
  disabled: boolean;
  progress?: boolean;
}

// The components' states
export const states: UnlockTokensState[] = [
  {
    label: () => 'Unlock LÍF',
    disabled: true
  },
  {
    label: (balance: BigNumber) => `Unlock ${etherString(balance)} LÍF`,
    disabled: false
  },
  {
    label: () => 'Unlocking the tokens',
    disabled: true,
    progress: true
  },
  {
    label: () => 'Unlocked',
    disabled: true
  }
];

const getStateByIndex = (index: number): UnlockTokensState => states[index];

export const UnlockTokens = (
  {
    provider,
    lifTokens,
    balances
  }: UnlockTokensProps
) => {
  const [error, setError] = useState<string | null>(null);
  const [signer, account] = useSigner(provider);
  const [stateIndex, setStateIndex] = useState(account && !isZero(balances.lif) ? 1 : 0);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const state = useMemo(() => {
    const newState = getStateByIndex(stateIndex)
    logger.debug('New state', newState);
    return newState;
  }, [stateIndex]);

  const allowance = useAllowance(lifTokens, account, lif2);

  useEffect(() => {
    if (isZero(balances.lif)) {
      setStateIndex(0);
    } else if (!isZero(balances.lif) && allowance.gte(balances.lif)) {
      logger.debug('allowance', allowance.toString());
      logger.debug('balance', balances.lif.toString());
      logger.debug('Already allowed');
      setStateIndex(3);
    } else if (stateIndex <= 1) {
      setStateIndex(account && !isZero(balances.lif) ? 1 : 0);
    }
  }, [stateIndex, account, balances, allowance]);

  const approveTokens = useCallback(async () => {
    try {
      setError(null);
      setTransactionHash(null);

      if (!lifTokens || !signer) {
        return;
      }

      setStateIndex(2);
      await lifTokens.approveAllOld(
        signer,
        tx => setTransactionHash(tx.hash)
      );
      setTimeout(() => {
        setStateIndex(3);
      }, 2000);
    } catch (error) {
      logger.error(error);
      setError(error.message);
      setStateIndex(1);
    }
  }, [lifTokens, signer]);

  return (
    <>
      <Container
        title='Old Tokens'
      >
        <Balance
          balance={balances.lif}
          kind='old'
        />
        <GreenLine />
        <Balance
          balance={balances.lif}
          kind='new'
          title='New tokens to claim'
        />
        <Button
          onClick={approveTokens}
          color='green'
          disabled={state.disabled}
          locked={stateIndex <= 2 || allowance.lt(balances.lif)}
          progress={state.progress}
        >
          {state.label(balances.lif)}
        </Button>
        {transactionHash &&
          <EtherscanLink
            blockExplorer={network.blockExplorer}
            transactionHash={transactionHash}
          />
        }
        {error &&
          <TxError>
            {error}
          </TxError>
        }
      </Container>
      <VectorDown />
    </>
  );
};
