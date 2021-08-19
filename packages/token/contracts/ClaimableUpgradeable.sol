// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

abstract contract ClaimableUpgradeable is
  Initializable,
  ERC20Upgradeable,
  ReentrancyGuardUpgradeable
{
  // Original Lif token instance
  IERC20Upgradeable private _originalLif;

  // Mapping of a holder address to its balance in stuck
  mapping(address => uint256) private _stuckBalance;

  /**
   * @dev Emitted when `value` tokens are been claimed by the `holder`
   */
  event Claim(address indexed holder, uint256 value);

  /**
   * @dev Emitted when `value` tokens are been resurrected for the `holder`
   */
  event Resurrect(address indexed holder, uint256 value);

  /**
   * @dev Sets the original Lif token instance
   *
   * Requirements:
   *
   * - `tokenAddress_` cannot be zero
   */
  function __Claimable_init(address tokenAddress_)
    internal
    initializer
  {
    require(tokenAddress_ != address(0), "Claimable: invalid token address");
    _originalLif = IERC20Upgradeable(tokenAddress_);
    __ReentrancyGuard_init();

    // Mint the initial supply.
    // These tokens will be held by the contract balance
    // until be claimed by original Lif token holders
    _mint(address(this), _originalLif.totalSupply());

    // Initialize the `_stuckBalance`, which contains tokens that have been stuck in the old contract
    // Created on the base of https://etherscan.io/token/0xeb9951021698b42e4399f9cbb6267aa35f82d59d?a=0xeb9951021698b42e4399f9cbb6267aa35f82d59d
    _stuckBalance[0x9067Ae747976631D6194311f6Cf6fD83A561b0C9] += 9830000000000000000000;
    _stuckBalance[0x415dF4Ef8f2E4afAEBd99eC1d49b05A220aC3673] += 51999999999999999995385;
    _stuckBalance[0x77E4588685744cdbDdBf677860B42A3c28E166DD] += 751039901550000000000;
    _stuckBalance[0xb91e2071762E2825D3ec7513304b7f833Be32d48] += 10000;
    _stuckBalance[0x72bA03F175420890d18423500f0C6b1f2B3e821D] += 5045000000000000000000;
    _stuckBalance[0x692306857D17a8f31bB5fEb17cfE765773487E66] += 185963000000000000000;
    _stuckBalance[0xA7F660812022155adA962F54D2C289C5592F518A] += 500000000000000000000;
    _stuckBalance[0x8adbf5f4F80319CFBe8d49976aAD9Aacc158B4b8] += 3050000000000000000000;
    _stuckBalance[0x77E4588685744cdbDdBf677860B42A3c28E166DD] += 40000000000000000000;
    _stuckBalance[0x77928bbE911befe4bD4E5D6A6C6D1b7ca58eAB6E] += 300000000000000000000;
  }

  /**
   * @dev Returns the original Lif token address
   */
  function originalLif() public view virtual returns (address) {
    return address(_originalLif);
  }

  function _mint(address to, uint256 amount)
    internal
    virtual
    override(ERC20Upgradeable)
  {
    super._mint(to, amount);
  }

  /**
   * @dev Claims tokens by original lif token holder
   *
   * Requirements:
   *
   * - The original Lif token balance of the holder must be positive
   * - Original tokens must be allowed to transfer
   * - a function call must not be reentrant call
   */
  function claim() external virtual nonReentrant {
    address holder = _msgSender();
    uint256 balance = _originalLif.balanceOf(holder);

    require(balance > 0, "Claimable: nothing to claim");
    require(
      _originalLif.allowance(holder, address(this)) >= balance,
      "Claimable: tokens not allowed"
    );

    // Fetches all the old tokens...
    SafeERC20Upgradeable.safeTransferFrom(
      _originalLif,
      holder,
      address(this),
      balance
    );
    require(
      _originalLif.balanceOf(holder) == 0,
      "Claimable: unable to transfer"
    );

    // ...and sends new tokens in change
    transfer(holder, balance);
    emit Claim(holder, balance);

    // Resurrect tokens if exists
    if (_stuckBalance[holder] > 0) {
      uint256 holderStuckBalance = _stuckBalance[holder];
      _stuckBalance[holder] = 0;
      transfer(holder, holderStuckBalance);
      emit Resurrect(holder, holderStuckBalance);
    }
  }

  uint256[49] private __gap;
}
