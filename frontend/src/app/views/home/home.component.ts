import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private headerService: HeaderService,
	) {
		this.headerService.data = {
			title: 'Início',
			icon: 'home',
			routerUrl: ''
		};
	}

	ngOnInit(): void {
	}

}
