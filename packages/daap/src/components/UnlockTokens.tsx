import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import type { Lif2Token } from '@windingtree/lif2-token-core';
import type { LifTokensBalances } from '../hooks/useBalances';
import type { BigNumber } from 'ethers';
import { useState, useMemo, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Logger from '../utils/logger';
import { getContractsAddresses, getNetwork } from '../config';

// Styles
import { colors } from '../styles';

// Icons
import VectorOutSvg from '../assets/VectorOut.svg'

// Custom components
import { Button } from '../components/Buttons';

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
`;

const EtherscanIcon = styled.img`
  width: 13px;
  height : 13px;
  margin-left: 10px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: rgb(${colors.red});
  margin-top: 10px;
`;

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
        setTransactionHash(null);
      }, 3000);
    } catch (error) {
      logger.error(error);
      setError(error.message);
      setStateIndex(1);
    }
  }, [lifTokens, signer]);

  return (
    <>
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
        <EtherscanLinkWrapper>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            href={`${network.blockExplorer}/tx/${transactionHash}`}
            title='Transaction on Etherscan'
            target='_blank'
            rel='noopener noreferrer'
          >
            View transaction on Etherscan
          </a>
          <EtherscanIcon
            src={VectorOutSvg}
          />
        </EtherscanLinkWrapper>
      }
      {error &&
        <ErrorWrapper>
          {error}
        </ErrorWrapper>
      }
    </>
  );
};
