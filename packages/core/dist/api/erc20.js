"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceOf = exports.totalSupply = exports.approveAllOld = exports.allowanceOld = exports.balanceOfOld = exports.totalSupplyOld = void 0;
const sendMethodTx_1 = require("../utils/sendMethodTx");
// Returns old Lif totalSupply
const totalSupplyOld = async (oldContract) => oldContract['totalSupply()']();
exports.totalSupplyOld = totalSupplyOld;
// Returns old Lif tokens balance
const balanceOfOld = async (oldContract, address) => oldContract['balanceOf(address)'](address);
exports.balanceOfOld = balanceOfOld;
// Returns allowance from old Lif contract
const allowanceOld = async (oldContract, owner, spender) => oldContract['allowance(address,address)'](owner, spender);
exports.allowanceOld = allowanceOld;
// Approve spending of the all old Lif tokens
const approveAllOld = async (oldContract, contract, ownerSigner, callback = sendMethodTx_1.txCallback, options = {}) => {
    const oldContractWithSigner = oldContract.connect(ownerSigner); // Old Lif
    const newContractAddress = contract.address;
    const holder = await ownerSigner.getAddress();
    const value = await exports.balanceOfOld(oldContractWithSigner, holder);
    const txArgs = [
        newContractAddress,
        value,
        options
    ];
    const { tx, receipt } = await sendMethodTx_1.sendMethodTx(oldContractWithSigner, 'approve(address,uint256)', txArgs, callback);
    return {
        holder,
        value,
        tx,
        receipt
    };
};
exports.approveAllOld = approveAllOld;
// Returns new Lif totalSupply
const totalSupply = async (contract) => contract['totalSupply()']();
exports.totalSupply = totalSupply;
// Return new Lif tokens balance
const balanceOf = async (contract, address) => contract['balanceOf(address)'](address);
exports.balanceOf = balanceOf;
//# sourceMappingURL=erc20.js.map