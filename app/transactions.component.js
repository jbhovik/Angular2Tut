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
var TransactionsComponent = (function () {
    function TransactionsComponent(atmService) {
        this.atmService = atmService;
        this.transactions = this.atmService.getTransactions();
    }
    return TransactionsComponent;
}());
TransactionsComponent = __decorate([
    core_1.Component({
        selector: 'transactions',
        template: "\n    <h2>Transaction History</h2>\n    <table border=\"1\">\n      <th>Date</th>\n      <th>Type</th>\n      <th>Amount</th>\n      <th>Balance</th>\n      <tr *ngFor=\"let row of transactions\">\n        <td>{{row._date | date: 'dd/MM/yyyy hh:mm:ss a'}}</td>\n        <td>{{row._type}}</td>\n        <td>{{row._amount}}</td>\n        <td>{{row._balance}}</td>\n      </tr>\n    </table>\n  "
    }),
    __metadata("design:paramtypes", [atm_service_1.AtmService])
], TransactionsComponent);
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map