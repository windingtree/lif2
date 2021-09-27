import type { Signer, BigNumber } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';
import type { ERC20Upgradeable, Lif2 } from '@windingtree/lif2-token/typechain';
import type { ApproveResult, ClaimResult, MethodOptions } from './types';

import Lif2Contract from '@windingtree/lif2-token/artifacts/contracts/Lif2V2.sol/Lif2V2.json';
import ERC20Contract from '@windingtree/lif2-token/artifacts/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol/ERC20Upgradeable.json';
import { ethers } from 'ethers';

import  { txCallback } from './utils/sendMethodTx';
import { isStopped, isClaimed, claim } from './api/claim';
import {
  totalSupplyOld,
  balanceOfOld,
  approveAllOld,
  allowanceOld,
  totalSupply,
  balanceOf,
} from './api/erc20';

/**
 * Lif2 token interface class
 * @class Lif2Token
 */
export class Lif2Token {
  public oldContract: ERC20Upgradeable;
  public contract: Lif2;

  /**
   * Creates an instance of Lif2.
   * @param {string} address
   * @param {Object} provider
   * @memberof Lif2Token
   */
  constructor(
    oldAddress: string,
    address: string,
    provider: Provider
  ) {
    this.oldContract = (new ethers.Contract(
      oldAddress,
      ERC20Contract.abi,
      provider
    ) as ERC20Upgradeable);
    this.contract = (new ethers.Contract(
      address,
      Lif2Contract.abi,
      provider
    ) as Lif2);
  }

  // Fetches the total supply from the old Lif contract
  totalSupplyOld(): Promise<BigNumber> {
    return totalSupplyOld(
      this.oldContract
    );
  }

  // Fetches the balance of tokens from the old Lif contract
  balanceOfOld(address: string): Promise<BigNumber> {
    return balanceOfOld(
      this.oldContract,
      address
    );
  }

  // Approves old Lif tokens on old contract to be taken by the new contract
  approveAllOld(
    owner: Signer,
    callback = txCallback,
    options: MethodOptions = {}
  ): Promise<ApproveResult> {
    return approveAllOld(
      this.oldContract,
      this.contract,
      owner,
      callback,
      options
    );
  }

  // Returns allowance from old Lif contract
  allowanceOld(
    owner: string,
    spender: string
  ): Promise<BigNumber> {
    return allowanceOld(
      this.oldContract,
      owner,
      spender
    );
  }

  // Fetches the total supply from the new Lif contract
  totalSupply(): Promise<BigNumber> {
    return totalSupply(
      this.contract
    );
  }

  // Fetches the balance of tokens from the NEW Lif contract
  balanceOf(address: string): Promise<BigNumber> {
    return balanceOf(
      this.contract,
      address
    );
  }

  // Checks if claim feature is stopped
  isStopped(): Promise<boolean> {
    return isStopped(this.contract);
  }

  // Checks if holder ever claimed tokens
  isClaimed(address: string): Promise<boolean> {
    return isClaimed(
      this.contract,
      address
    );
  }

  // Claim tokens
  claim(
    owner: Signer,
    callback = txCallback,
    options: MethodOptions = {}
  ): Promise<ClaimResult> {
    return claim(
      this.contract,
      owner,
      callback,
      options
    );
  }
}
