"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claim = exports.isClaimed = exports.isStopped = void 0;
const ethers_1 = require("ethers");
const sendMethodTx_1 = require("../utils/sendMethodTx");
const extractEvents_1 = require("../utils/extractEvents");
// Checks stopped state
const isStopped = async (contract) => contract['stopped()']();
exports.isStopped = isStopped;
// Checks if a holder ever claimed tokens
const isClaimed = async (contract, holder) => {
    const eventFilter = contract.filters.Claim(holder);
    const events = await contract.queryFilter(eventFilter);
    return events && events.length > 0;
};
exports.isClaimed = isClaimed;
// Claim tokens
// - the callback function will be called right after a transaction sent
const claim = async (contract, holderSigner, callback = sendMethodTx_1.txCallback, options = {}) => {
    const stopped = await exports.isStopped(contract);
    if (stopped) {
        throw new Error('The claim of tokens feature is stopped.');
    }
    const contractWithSigner = contract.connect(holderSigner);
    const holder = await holderSigner.getAddress();
    const txArgs = [
        options
    ];
    const { tx, receipt } = await sendMethodTx_1.sendMethodTx(contractWithSigner, 'claim()', txArgs, callback);
    let claimed;
    let resurrected;
    try {
        const claimEvents = extractEvents_1.extractEvents(receipt, 'Claim');
        claimed = claimEvents[0].args.value;
        const resurrectEvents = extractEvents_1.extractEvents(receipt, 'Resurrect', false);
        resurrected = resurrectEvents.length > 0 ? resurrectEvents[0].args.value : ethers_1.BigNumber.from(0);
    }
    catch (error) {
        console.error(error);
        throw new Error('Unable to claim tokens.');
    }
    return {
        holder,
        claimed,
        resurrected,
        tx,
        receipt
    };
};
exports.claim = claim;
//# sourceMappingURL=claim.js.map