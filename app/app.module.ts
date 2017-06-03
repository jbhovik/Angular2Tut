import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AtmComponent} from './atm.component'
import {AtmService} from './atm.service'
import {TransactionsComponent} from './transactions.component'


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    AtmComponent,
    TransactionsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
