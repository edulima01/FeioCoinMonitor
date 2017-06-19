import { Component } from '@angular/core';

import { Exchange } from './exchange.model';

@Component({
	selector: 'app-root',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	private exchange: Exchange = {
		name: 'FoxBit',
		apiURL: ''
	};

	constructor() { }
}
