export class Transaction {
  private _date:string
  private _type:string
  private _amount:string
  private _balance:string
  constructor(date:Date, type:string, amount:string, balance:string) {
    this._date = String(date)
    this._type = type
    this._amount = amount
    this._balance = balance
  }
}