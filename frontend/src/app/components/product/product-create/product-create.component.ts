import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../services/rest/product.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	constructor(
		private productService: ProductService,
		private router: Router,
	) {
	}

	ngOnInit(): void {
	}

	create(): void {
		this.productService.showMessage('Operação executada com sucesso.');
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}

}
