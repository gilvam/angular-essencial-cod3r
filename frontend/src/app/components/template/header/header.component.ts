import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) {
	}

	ngOnInit(): void {
	}

	get title(): string {
		return this.headerService.data.title;
	}

	get icon(): string {
		return this.headerService.data.icon;
	}

	get routerUrl(): string {
		return this.headerService.data.routerUrl;
	}

}
