import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdListModule } from '@angular/material';
import 'hammerjs';

import { HomeComponent } from './home.component';
import { TransactionListComponent } from './transactionList.component';
import { CryptoValuePipe } from './crypto-value.pipe';

@NgModule({
	declarations: [
		// Components
		HomeComponent,
		TransactionListComponent,
		// Pipes
		CryptoValuePipe
	],
	imports: [
		BrowserModule,
		CommonModule,
		MdListModule
	],
	providers: [],
	bootstrap: [HomeComponent]
})
export class ExchangeModule { }
