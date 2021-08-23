import type { Signer,BigNumber } from 'ethers';
import type { MethodOptions, ApproveResult } from '../types';
import type { ERC20Upgradeable, Lif2 } from '@windingtree/lif2-token';
import { sendMethodTx, txCallback } from '../utils/sendMethodTx';

// Returns old Lif totalSupply
export const totalSupplyOld = async (
  oldContract: ERC20Upgradeable
): Promise<BigNumber> =>
  oldContract['totalSupply()']();

// Returns old Lif tokens balance
export const balanceOfOld = async (
  oldContract: ERC20Upgradeable,
  address: string
): Promise<BigNumber> =>
  oldContract['balanceOf(address)'](address);

// Returns allowance from old Lif contract
export const allowanceOld = async (
  oldContract: ERC20Upgradeable,
  owner: string,
  spender: string
): Promise<BigNumber> =>
  oldContract['allowance(address,address)'](owner, spender);

// Approve spending of the all old Lif tokens
export const approveAllOld = async (
  oldContract: ERC20Upgradeable,
  contract: Lif2,
  ownerSigner: Signer,
  callback = txCallback,
  options: MethodOptions = {}
): Promise<ApproveResult> => {
  const oldContractWithSigner = oldContract.connect(ownerSigner);// Old Lif
  const newContractAddress = contract.address;
  const holder = await ownerSigner.getAddress();
  const value = await balanceOfOld(oldContractWithSigner, holder);

  const txArgs = [
    newContractAddress,
    value,
    options
  ];

  const { tx, receipt } = await sendMethodTx(
    oldContractWithSigner,
    'approve(address,uint256)',
    txArgs,
    callback
  );

  return {
    holder,
    value,
    tx,
    receipt
  };
};

// Returns new Lif totalSupply
export const totalSupply = async (
  contract: Lif2
): Promise<BigNumber> =>
  contract['totalSupply()']();

// Return new Lif tokens balance
export const balanceOf = async (
  contract: Lif2,
  address: string
): Promise<BigNumber> =>
  contract['balanceOf(address)'](address);
