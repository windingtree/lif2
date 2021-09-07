"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEvents = void 0;
const extractEvents = (receipt, eventName, mustThrow = true) => {
    var _a;
    const events = (_a = receipt.events) === null || _a === void 0 ? void 0 : _a.filter((e) => e.event === eventName);
    if (mustThrow && (!events || events.length === 0)) {
        throw new Error(`Don't found events of name: ${eventName}`);
    }
    return events;
};
exports.extractEvents = extractEvents;
//# sourceMappingURL=extractEvents.js.map