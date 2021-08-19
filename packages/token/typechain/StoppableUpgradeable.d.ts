/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface StoppableUpgradeableInterface extends ethers.utils.Interface {
  functions: {
    "stopped()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;

  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;

  events: {
    "Stopped(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
}

export class StoppableUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StoppableUpgradeableInterface;

  functions: {
    stopped(overrides?: CallOverrides): Promise<[boolean]>;

    "stopped()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  stopped(overrides?: CallOverrides): Promise<boolean>;

  "stopped()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    stopped(overrides?: CallOverrides): Promise<boolean>;

    "stopped()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    Stopped(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    stopped(overrides?: CallOverrides): Promise<BigNumber>;

    "stopped()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stopped()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
