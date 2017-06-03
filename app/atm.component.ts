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
    this.balance = String(this.atmService.getBalance())
    this.balance = '$' + this.balance
  }
  private deposit(value: string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance + amount
    this.changeBalance(serviceBalance, amount, 'Deposit')
  }
  private withdraw(value: string): void {
    let serviceBalance:number = this.atmService.getBalance()
    let amount:number = +value
    serviceBalance = serviceBalance - amount
    this.changeBalance(serviceBalance, amount, 'Withdraw')
  }
  private changeBalance(serviceBalance:number, amount:number, type:string) {
    this.atmService.setBalance(serviceBalance)
    if (serviceBalance < 0) {
      serviceBalance = Math.abs(serviceBalance)
      this.balance = '($' + serviceBalance + ')'
    } else {
      this.balance = '$' + serviceBalance
    }
    let date =  new Date()
    let transaction:Transaction = new Transaction(date, type, '$' + amount, this.balance)
    this.atmService.addTransaction(transaction)
  }
}