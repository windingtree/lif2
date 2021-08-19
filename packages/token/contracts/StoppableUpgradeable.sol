// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @dev Contract module which allows children to implement stop mechanism
 */
abstract contract StoppableUpgradeable  is Initializable, ContextUpgradeable {
  /**
   * @dev Emitted when the stop is triggered by `account`.
   */
  event Stopped(address account);

  bool private _stopped;

  /**
   * @dev Initializes the contract in unstopped state.
   */
  function __Stoppable_init() internal initializer {
    __Context_init_unchained();
  }

  function __Stoppable_init_unchained() internal initializer {
    _stopped = false;
  }

  /**
    * @dev Returns true if the contract is stopped, and false otherwise.
    */
  function stopped() public view virtual returns (bool) {
    return _stopped;
  }

  /**
   * @dev Modifier to make a function callable only when the contract is not stopped.
   *
   * Requirements:
   *
   * - The contract must not be stopped.
   */
  modifier whenNotStopped() {
    require(!stopped(), "Stoppable: stopped");
    _;
  }

  /**
   * @dev Triggers stopped state.
   *
   * Requirements:
   *
   * - The contract must not be stopped.
   */
  function _stop() internal virtual whenNotStopped {
    _stopped = true;
    emit Stopped(_msgSender());
  }

  uint256[49] private __gap;
}
