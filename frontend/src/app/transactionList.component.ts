import { Component, Input } from '@angular/core';

import { Exchange, Transaction } from './exchange.model';

@Component({
	selector: 'transaction-list',
	templateUrl: './transactionList.component.html',
	styleUrls: ['./transactionList.component.scss']
})
export class TransactionListComponent {
	@Input()
	private exchange: Exchange;

	private transactions: Transaction[] = [
		{
			date: new Date('2015-03-01'),
			value: { value: 10000, asset: { name: 'Real', symbol: 'R$', isFiat: () => true } },
			originValue: null,
			feeValue: null,
			address: null,
			origin: null,
			destination: this.exchange,
			isDeposit: () => true,
			isWithdraw: () => false,
			isTrade: () => false,
			isTransfer: () => false,
			isOrigin: () => false,
			isDestination: () => true
		}
	];
}
