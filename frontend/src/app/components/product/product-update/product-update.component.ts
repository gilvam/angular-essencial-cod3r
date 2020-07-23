import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/rest/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

	product: Product;

	constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.productService.readById(id).subscribe(response => {
			this.product = response;
		});
	}

	update(): void {
		this.productService.update(this.product).subscribe(response => {
			this.productService.showMessage('Produto atualizado com sucesso!');
			this.router.navigate(['/products'])
		});
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}

}
