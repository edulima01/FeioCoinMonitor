import { Pipe, PipeTransform } from '@angular/core';

import { TransactionValue } from './exchange.model';

@Pipe({
	name: 'cryptoValue'
})
export class CryptoValuePipe implements PipeTransform {

	transform(value: TransactionValue, args?: any): string {
		const prefix: string = value.asset.isFiat() ? value.asset.symbol : '';
		const sufix: string = value.asset.isFiat() ? '' : value.asset.symbol;
		return prefix + ' ' + value.value + ' ' + sufix;
	}

}
