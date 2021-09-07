"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lif2Token = void 0;
const Lif2_json_1 = __importDefault(require("@windingtree/lif2-token/artifacts/contracts/Lif2.sol/Lif2.json"));
const ERC20Upgradeable_json_1 = __importDefault(require("@windingtree/lif2-token/artifacts/@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol/ERC20Upgradeable.json"));
const ethers_1 = require("ethers");
const sendMethodTx_1 = require("./utils/sendMethodTx");
const claim_1 = require("./api/claim");
const erc20_1 = require("./api/erc20");
/**
 * Lif2 token interface class
 * @class Lif2Token
 */
class Lif2Token {
    /**
     * Creates an instance of Lif2.
     * @param {string} address
     * @param {Object} provider
     * @memberof Lif2Token
     */
    constructor(oldAddress, address, provider) {
        this.oldContract = new ethers_1.ethers.Contract(oldAddress, ERC20Upgradeable_json_1.default.abi, provider);
        this.contract = new ethers_1.ethers.Contract(address, Lif2_json_1.default.abi, provider);
    }
    // Fetches the total supply from the old Lif contract
    totalSupplyOld() {
        return erc20_1.totalSupplyOld(this.oldContract);
    }
    // Fetches the balance of tokens from the old Lif contract
    balanceOfOld(address) {
        return erc20_1.balanceOfOld(this.oldContract, address);
    }
    // Approves old Lif tokens on old contract to be taken by the new contract
    approveAllOld(owner, callback = sendMethodTx_1.txCallback, options = {}) {
        return erc20_1.approveAllOld(this.oldContract, this.contract, owner, callback, options);
    }
    // Returns allowance from old Lif contract
    allowanceOld(owner, spender) {
        return erc20_1.allowanceOld(this.oldContract, owner, spender);
    }
    // Fetches the total supply from the new Lif contract
    totalSupply() {
        return erc20_1.totalSupply(this.contract);
    }
    // Fetches the balance of tokens from the NEW Lif contract
    balanceOf(address) {
        return erc20_1.balanceOf(this.contract, address);
    }
    // Checks if claim feature is stopped
    isStopped() {
        return claim_1.isStopped(this.contract);
    }
    // Checks if holder ever claimed tokens
    isClaimed(address) {
        return claim_1.isClaimed(this.contract, address);
    }
    // Claim tokens
    claim(owner, callback = sendMethodTx_1.txCallback, options = {}) {
        return claim_1.claim(this.contract, owner, callback, options);
    }
}
exports.Lif2Token = Lif2Token;
//# sourceMappingURL=index.js.map