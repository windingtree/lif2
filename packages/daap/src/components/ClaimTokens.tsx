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
import VectorOutSvg from '../assets/VectorOut.svg';
import Lif2Png from '../assets/lif2.png';

// Custom components
import { Button } from './Buttons';

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
  balances: LifTokensBalances
}

export interface ClaimTokensState {
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
export const states: ClaimTokensState[] = [
  {
    label: () => 'Claim LÍF2',
    disabled: true
  },
  {
    label: (balance: BigNumber) => `Claim ${etherString(balance)} LÍF2`,
    disabled: false
  },
  {
    label: () => 'Claiming the tokens',
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
    balances
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

  const allowance = useAllowance(lifTokens, account, lif2);

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
        setTransactionHash(null);
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
      {!showRegisterToken &&
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
