import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {

	private _data = new BehaviorSubject<HeaderData>({
		title: 'Início',
		icon: 'home',
		routerUrl: ''
	});

	constructor() {
	}

	get data(): HeaderData {
		return this._data.value;
	}

	set data(headerData: HeaderData) {
		this._data.next(headerData);
	}
}
