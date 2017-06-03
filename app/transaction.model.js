"use strict";
var Transaction = (function () {
    function Transaction(date, type, amount, balance) {
        this._date = String(date);
        this._type = type;
        this._amount = amount;
        this._balance = balance;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.model.js.map