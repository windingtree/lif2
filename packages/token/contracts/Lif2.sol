// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "./StoppableUpgradeable.sol";
import "./ClaimableUpgradeable.sol";

/**
 * @dev Lif ERC20 token
 */
contract Lif2 is
  Initializable,
  ERC20Upgradeable,
  PausableUpgradeable,
  StoppableUpgradeable,
  OwnableUpgradeable,
  ERC20PermitUpgradeable,
  ClaimableUpgradeable
{
  /**
   * @dev Initializes the contract
   *
   * Note: Must be called as soon as possible after the contract deployment
   */
  function initialize(address tokenAddress_) public initializer {
    __ERC20_init("Lif Token", "LIF");
    __Pausable_init();
    __Stoppable_init();
    __Ownable_init();
    __ERC20Permit_init("Lif Token");
    __Claimable_init(tokenAddress_);
  }

  /**
   * @dev Triggers stopped state.
   */
  function pause() public onlyOwner {
    _pause();
  }

  /**
   * @dev Returns to normal paused state.
   */
  function unpause() public onlyOwner {
    _unpause();
  }

  /**
   * @dev See {ERC20Upgradeable-_beforeTokenTransfer}
   */
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override whenNotPaused {
    super._beforeTokenTransfer(from, to, amount);
  }

  // The following functions are overrides required by Solidity.

  /**
   * @dev See {ERC20Upgradeable-_afterTokenTransfer}
   */
  function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override(ERC20Upgradeable) {
    super._afterTokenTransfer(from, to, amount);
  }

  /**
   * @dev See {ERC20Upgradeable-_mint}
   */
  function _mint(address to, uint256 amount)
    internal
    override(ERC20Upgradeable, ClaimableUpgradeable)
  {
    super._mint(to, amount);
  }

  /**
   * @dev See {ERC20Upgradeable-_burn}
   */
  function _burn(address account, uint256 amount)
    internal
    override(ERC20Upgradeable)
  {
    super._burn(account, amount);
  }

  /**
   * @dev See {IERC20-transfer}.
   *
   * Requirements:
   *
   * - `recipient` cannot be the zero address.
   * - `recipient` cannot be a contract
   * - the caller must have a balance of at least `amount`.
   */
  function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
    require(
      !AddressUpgradeable.isContract(recipient),
      "ERC20: transfer to the contract"
    );
    return super.transfer(recipient, amount);
  }

  /**
   * @dev See {IERC20-transfer}.
   *
   * Original `transfer` function behavior
   *
   * Requirements:
   *
   * - `recipient` cannot be the zero address.
   * - the caller must have a balance of at least `amount`.
   */
  function unsafeTransfer(address recipient, uint256 amount) public virtual returns (bool) {
    return super.transfer(recipient, amount);
  }
}
