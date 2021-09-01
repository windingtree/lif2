import type { Web3ModalProvider } from '../hooks/useWeb3Modal';
import type { ApolloQueryResult } from '@apollo/client';
import type { BigNumber } from 'ethers';
import { useState, useCallback, useEffect } from 'react';
import { ethers, BigNumber as BN, utils } from 'ethers';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from '@apollo/client';
import Logger from '../utils/logger';
import abis from '../abis.json';
import { getContractsAddresses } from '../config';

// Config
const contracts = getContractsAddresses();

export interface LiquidityPosition {
  liquidityTokenBalance: string,
  pair: {
    reserve1: string,
    totalSupply: string
  }
}

export interface LiquidityPositions {
  liquidityPositions: LiquidityPosition[]
}

export type UseDeFiHook = [
  uniswapV2Balance: BigNumber,
  idexBalance: BigNumber,
  etherDeltaBalance: BigNumber,
];

// Initialize logger
const logger = Logger('useDeFi');

// Shorthand to BN zero
const zero = BN.from(0);

// Creating a Uniswap V2 client
const uniswapV2Client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  cache: new InMemoryCache()
});

// Uniswap V2 query helper
const uniswapV2Query = async (
  account: string
): Promise<ApolloQueryResult<LiquidityPositions>> => uniswapV2Client
  .query(
    {
      query: gql`
        query LiquidityPositions {
          liquidityPositions(
            where:{
              pair: "0x2c1564290f52206bc396131ba5a5cf4cd2343a28",
              user: "${account}"
            }
          ) {
            liquidityTokenBalance
            pair {
              reserve1
              totalSupply
            }
          }
        }
    `
    }
  );

// IDEX query helper
const idexQuery = async (
  provider: Web3ModalProvider,
  account: string
): Promise<BigNumber> => {
  const contract = new ethers.Contract(
    '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208',
    abis.idex,
    provider
  );
  return contract.balanceOf(
    contracts.lif,
    account
  );
};

// EtherDelta query helper
const etherDeltaQuery = async (
  provider: Web3ModalProvider,
  account: string
): Promise<BigNumber> => {
  const contract = new ethers.Contract(
    '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819',
    abis.etherdelta,
    provider
  );
  return contract.balanceOf(
    contracts.lif,
    account
  );
};

// useDeFi react hook
export const useDeFi = (
  provider: Web3ModalProvider | undefined,
  account: string | undefined,
  isRightNetwork: boolean
): UseDeFiHook => {
  const [uniswapV2Balance, setUniswapV2Balance] = useState<BigNumber>(zero);
  const [idexBalance, setIdexBalance] = useState<BigNumber>(zero);
  const [etherDeltaBalance, setEtherDeltaBalance] = useState<BigNumber>(zero);

  const getUniswapV2Balance = useCallback(async () => {
    try {
      if (isRightNetwork && account) {
        const liquidityPositions = await uniswapV2Query(account);
        if (liquidityPositions.data.liquidityPositions.length === 0) {
          setUniswapV2Balance(zero);
        } else {
          // UniswapV2: reserve1 * 10^18 * liquidityTokenBalance / totalSupply
          // const decimalsDivisor = BN.from(10).pow(18);
          const tokenBalance = BN
            .from(
              liquidityPositions.data.liquidityPositions[0].pair.reserve1
            )
            .mul(
              utils
                .parseUnits(
                  liquidityPositions.data.liquidityPositions[0].liquidityTokenBalance,
                  'ether'
                )
            )
            // .div(decimalsDivisor)
            .div(
              utils
                .parseUnits(
                  liquidityPositions.data.liquidityPositions[0].pair.totalSupply,
                  'ether'
                )
            );
          logger.info(`Uniswap V2 balance for "${account}":`, tokenBalance.toString());
          setUniswapV2Balance(tokenBalance);
        }
      }
    } catch (error) {
      logger.error('Getting Uniswap V2 balance error:', error);
      setUniswapV2Balance(zero);
    }
  }, [isRightNetwork, account]);

  const getIdexBalance = useCallback(async () => {
    try {
      if (isRightNetwork && provider && account) {
        const tokenBalance = await idexQuery(provider, account);
        logger.info(`IDEX balance for "${account}":`, tokenBalance.toString());
        setIdexBalance(tokenBalance);
      }
    } catch (error) {
      logger.error('Getting IDEX balance error:', error);
      setIdexBalance(zero);
    }
  }, [isRightNetwork, provider, account]);

  const getEtherDeltaBalance = useCallback(async () => {
    try {
      if (isRightNetwork && provider && account) {
        const tokenBalance = await etherDeltaQuery(provider, account);
        logger.info(`EtherDelta balance for "${account}":`, tokenBalance.toString());
        setEtherDeltaBalance(tokenBalance);
      }
    } catch (error) {
      logger.error('Getting IDEX balance error:', error);
      setEtherDeltaBalance(zero);
    }
  }, [isRightNetwork, provider, account]);

  useEffect(() => {
    getUniswapV2Balance();
  }, [getUniswapV2Balance]);

  useEffect(() => {
    getIdexBalance();
  }, [getIdexBalance]);

  useEffect(() => {
    getEtherDeltaBalance();
  }, [getEtherDeltaBalance]);

  return [
    uniswapV2Balance,
    idexBalance,
    etherDeltaBalance
  ]
};
