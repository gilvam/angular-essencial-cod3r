import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/rest/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	product: Product = {
		name: 'Produto de teste',
		price: 125.98
	};

	constructor(
		private productService: ProductService,
		private router: Router,
	) {
	}

	ngOnInit(): void {
	}

	create(): void {
		this.productService.create(this.product).subscribe((response) => {
			this.productService.showMessage('Producto criado!');
			console.log(`response`, response);
			this.cancel();
		});
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}

}
