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
var atm_service_1 = require("./atm.service");
var transaction_model_1 = require("./transaction.model");
var AtmComponent = (function () {
    function AtmComponent(atmService) {
        this.atmService = atmService;
        this.balance = String(this.atmService.getBalance());
        this.balance = '$' + this.balance;
    }
    AtmComponent.prototype.deposit = function (value) {
        var serviceBalance = this.atmService.getBalance();
        var amount = +value;
        serviceBalance = serviceBalance + amount;
        this.changeBalance(serviceBalance, amount, 'Deposit');
    };
    AtmComponent.prototype.withdraw = function (value) {
        var serviceBalance = this.atmService.getBalance();
        var amount = +value;
        serviceBalance = serviceBalance - amount;
        this.changeBalance(serviceBalance, amount, 'Withdraw');
    };
    AtmComponent.prototype.changeBalance = function (serviceBalance, amount, type) {
        this.atmService.setBalance(serviceBalance);
        if (serviceBalance < 0) {
            serviceBalance = Math.abs(serviceBalance);
            this.balance = '($' + serviceBalance + ')';
        }
        else {
            this.balance = '$' + serviceBalance;
        }
        var date = new Date();
        var transaction = new transaction_model_1.Transaction(date, type, '$' + amount, this.balance);
        this.atmService.addTransaction(transaction);
    };
    return AtmComponent;
}());
AtmComponent = __decorate([
    core_1.Component({
        selector: 'atm',
        template: "\n    <h1>The Biznak</h1>\n    <div>Balance: {{balance}}</div>\n    Amount: <input #amount type=\"number\" required><br>\n    <button (click)=\"deposit(amount.value)\">Deposit</button>\n    <button (click)=\"withdraw(amount.value)\">Withdraw</button>\n  "
    }),
    __metadata("design:paramtypes", [atm_service_1.AtmService])
], AtmComponent);
exports.AtmComponent = AtmComponent;
//# sourceMappingURL=atm.component.js.map