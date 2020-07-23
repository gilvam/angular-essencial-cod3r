import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) // sem necessidade de colocar em um model.ts, será disponível em toda a aplicação
export class ProductService {

	baseUrl = 'http://localhost:3001/products';

	constructor(
		private snackbar: MatSnackBar,
		private http: HttpClient,
	) {
	}

	showMessage(msg: string): void {
		this.snackbar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product);
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl);
	}

	readById(id: string): Observable<Product> {
		return this.http.get<Product>(`${ this.baseUrl }/${ id }`);
	}

	update(product: Product): Observable<Product> {
		return this.http.put<Product>(`${ this.baseUrl }/${ product.id }`, product);
	}
}
