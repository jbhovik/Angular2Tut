"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AtmService = (function () {
    function AtmService() {
        this.transactions = [];
        this.balance = 1000;
    }
    AtmService.prototype.setBalance = function (val) {
        this.balance = val;
    };
    AtmService.prototype.getBalance = function () {
        return this.balance;
    };
    AtmService.prototype.addTransaction = function (transaction) {
        this.transactions.push(transaction);
    };
    AtmService.prototype.getTransactions = function () {
        return this.transactions;
    };
    return AtmService;
}());
AtmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AtmService);
exports.AtmService = AtmService;
//# sourceMappingURL=atm.service.js.map