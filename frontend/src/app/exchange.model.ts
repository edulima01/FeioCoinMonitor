export interface Exchange {
	name: string;
	apiURL: string;
}

export interface Address {
	address: string;
}

export interface Asset {
	name: string;
	symbol: string;
	isFiat(): boolean;
}

export interface TransactionValue {
	value: number;
	asset: Asset;
}

export interface Transaction {
	date : Date;
	value : TransactionValue;
	originValue : TransactionValue;
	feeValue : TransactionValue;
	address : Address;
	origin : Exchange;
	destination : Exchange;

	isDeposit() : boolean;
	isWithdraw() : boolean;
	isTransfer() : boolean;
	isTrade() : boolean;
	isDestination() : boolean;
    isOrigin() : boolean;
}