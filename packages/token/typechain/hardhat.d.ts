/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ClaimableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimableUpgradeable__factory>;
    getContractFactory(
      name: "Lif2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2__factory>;
    getContractFactory(
      name: "Lif2V2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2V2__factory>;
    getContractFactory(
      name: "Lif2V3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2V3__factory>;
    getContractFactory(
      name: "OldLifTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OldLifTest__factory>;
    getContractFactory(
      name: "Lif2Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2Test__factory>;
    getContractFactory(
      name: "Lif2TestV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2TestV2__factory>;
    getContractFactory(
      name: "Lif2TestV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2TestV3__factory>;
    getContractFactory(
      name: "Lif2UpgradeabilityTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lif2UpgradeabilityTest__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "ERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ClaimableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimableUpgradeable>;
    getContractAt(
      name: "Lif2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2>;
    getContractAt(
      name: "Lif2V2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2V2>;
    getContractAt(
      name: "Lif2V3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2V3>;
    getContractAt(
      name: "OldLifTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OldLifTest>;
    getContractAt(
      name: "Lif2Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2Test>;
    getContractAt(
      name: "Lif2TestV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2TestV2>;
    getContractAt(
      name: "Lif2TestV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2TestV3>;
    getContractAt(
      name: "Lif2UpgradeabilityTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lif2UpgradeabilityTest>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
