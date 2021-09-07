"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMethodTx = exports.txCallback = void 0;
const txCallback = (
// eslint-disable-next-line @typescript-eslint/no-unused-vars
tsResponse) => { };
exports.txCallback = txCallback;
const sendMethodTx = async (contract, methodName, args, callback = exports.txCallback) => {
    const signer = contract.signer;
    // Estimate transaction gas
    const gas = await contract.estimateGas[methodName](...args);
    // Validate balance
    const ownerBalance = await signer.getBalance();
    if (ownerBalance.lt(gas)) {
        throw new Error('Insufficient balance to sent transaction');
    }
    // Send transaction
    const tx = await contract[methodName](...args);
    callback(tx);
    const receipt = await tx.wait();
    return {
        tx,
        receipt
    };
};
exports.sendMethodTx = sendMethodTx;
//# sourceMappingURL=sendMethodTx.js.map