import {Component} from '@angular/core'
import {AtmService} from './atm.service'
import {Transaction} from './transaction.model'

@Component({
  selector: 'atm',
  template: `
    <h1>The Biznak</h1>
    <div>Balance: {{balance}}</div>
    Amount: <input #amount type="number" required><br>
    <button (click)="deposit(amount.value)">Deposit</button>
    <button (click)="withdraw(amount.value)">Withdraw</button>
  `
})

export class AtmComponent {
  balance:string
  atmService:AtmService
  constructor(atmService:AtmService) {
    this.atmService = atmService
    let serviceBalance:number = this.atmService.getBalance()
    let serviceBalanceRounded:number = Math.round(serviceBalance * 100) / 100
    serviceBalanceRounded = serviceBalanceRounded.toFixed(2)
    this.balance = '$' + String(serviceBalanceRounded)
  }
  private deposit(value:string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance + amount
    this.changeBalance(serviceBalance, amount, 'Deposit')
  }
  private withdraw(value:string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance - amount
    this.changeBalance(serviceBalance, amount, 'Withdraw')
  }
  private changeBalance(serviceBalance:number, amount:number, type:string) {
    this.atmService.setBalance(serviceBalance)
    let serviceBalanceRounded:number = Math.round(serviceBalance * 100) / 100
    serviceBalanceRounded = serviceBalanceRounded.toFixed(2)
    let amountRounded = Math.round(amount * 100) / 100
    amountRounded = amountRounded.toFixed(2)
    if (serviceBalance < 0) {
      serviceBalanceRounded = Math.abs(serviceBalanceRounded)
      this.balance = '($' + serviceBalanceRounded + ')'
    } else {
      this.balance = '$' + serviceBalanceRounded
    }
    let date =  new Date()
    let transaction:Transaction = new Transaction(date, type, '$' + amountRounded, this.balance)
    this.atmService.addTransaction(transaction)
  }
}