// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./Lif2.sol";

contract Lif2UpgradeabilityTest is Lif2 {

  function newFunction() public pure returns(bool) {
    return true;
  }
}
