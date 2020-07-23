import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/rest/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

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

	delete(): void {
		this.productService.delete(this.product.id).subscribe(response => {
			this.productService.showMessage('Produto excluído com sucesso!');
			this.router.navigate(['/products'])
		});
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}

}
