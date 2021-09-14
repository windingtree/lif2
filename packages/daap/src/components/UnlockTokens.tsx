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
import { VectorDown } from '../components/Decor';
import { EtherscanLink } from '../components/EtherscanLink';
import { TxError } from '../components/TxError';
import { DeFiNote } from '../components/DeFiNote';
import { ContractLink } from '../components/ContractLink';
// import { DeFi } from '../components/DeFi';

// Utils
import { isZero, etherString } from '../utils/numbers';

// Custom hooks
import { useAllowance } from '../hooks/useAllowance';
import { useSigner } from '../hooks/useSigner';
// import { useDeFi } from '../hooks/useDeFi';

// Initialize logger
const logger = Logger('UnlockTokens');

// Config
const { lif2 } = getContractsAddresses();
const network = getNetwork();

export interface UnlockTokensProps {
  lifTokens: Lif2Token | undefined;
  provider: Web3ModalProvider | undefined;
  balances: LifTokensBalances;
  isEnabled: boolean;
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
    label: (balance: BigNumber) => `Unlock ${etherString(balance)}\u00A0LÍF`,
    disabled: false
  },
  {
    label: () => 'Unlocking the\u00A0tokens',
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
    balances,
    isEnabled
  }: UnlockTokensProps
) => {
  const [error, setError] = useState<string | null>(null);
  const [signer, account] = useSigner(provider);
  const [stateIndex, setStateIndex] = useState(account && !isZero(balances.lif) ? 1 : 0);
  const [isClaimed, setIsClaimed] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const state = useMemo(() => {
    const newState = getStateByIndex(stateIndex)
    logger.info(`New state #${stateIndex}`, newState);
    return newState;
  }, [stateIndex]);

  const allowance = useAllowance(
    lifTokens,
    account,
    lif2,
    isEnabled
  );

  useEffect(() => {
    setIsClaimed(
      !balances.isSetupDone ||
      (balances.isClaimed && isZero(balances.lif))
    );
  }, [balances]);

  useEffect(() => {
    if (isZero(balances.lif)) {
      setStateIndex(0);
    } else if (!isZero(balances.lif) && allowance.gte(balances.lif)) {
      logger.info('balance', balances.lif.toString());
      logger.info('Already allowed', allowance.toString());
      setStateIndex(3);
    } else if (stateIndex <= 1) {
      setStateIndex(account && !isZero(balances.lif) ? 1 : 0);
    }
  }, [stateIndex, account, balances, allowance]);

  useEffect(() => {
    setTransactionHash(null);
    setStateIndex(0);
  }, [account, isEnabled]);

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
      setError((error as Error).message);
      setStateIndex(1);
    }
  }, [lifTokens, signer]);

  // const [uniswapV2Balance, idexBalance, etherDeltaBalance] = useDeFi(
  //   provider,
  //   account,//'0x4c55ae27581b44cd6e014bced60d67680fc86586',
  //   isRightNetwork
  // );

  if (isClaimed) {
    return null;
  }

  return (
    <>
      <Container
        title='Old Tokens'
        isLoading={!balances.isSetupDone}
      >
        <Balance
          balance={balances.lif}
          kind='old'
        />
        {/* <DeFi
          uniswapV2Balance={uniswapV2Balance}
          idexBalance={idexBalance}
          etherDeltaBalance={etherDeltaBalance}
        /> */}
        {/* <Balance
          balance={balances.lif}
          kind='new'
          title='New tokens available to claim'
          isUnlock={true}
        /> */}
        {lifTokens &&
          <ContractLink
            address={lifTokens.oldContract.address}
          />
        }
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
          <TxError message={error}/>
        }
        <DeFiNote />
      </Container>
      <VectorDown />
    </>
  );
};
