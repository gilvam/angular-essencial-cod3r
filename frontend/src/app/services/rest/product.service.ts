import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) // sem necessidade de colocar em um model.ts, será disponível em toda a aplicação
export class ProductService {

	baseUrl = 'http://localhost:3001/products';

	constructor(
		private snackbar: MatSnackBar,
		private http: HttpClient,
	) {
	}

	showMessage(msg: string, isError: boolean = false): void {
		this.snackbar.open(msg, 'X', {
			duration: 999000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: isError ? ['msg-error'] : ['msg-success']
		});
	}

	errorHandler(e: any): Observable<any> {
		this.showMessage('Ocorreu um erro :(', true);
		return EMPTY;
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map(item => item),
			catchError(e => this.errorHandler(e))
		);
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl).pipe(
			map(item => item),
			catchError(e => this.errorHandler(e))
		);
	}

	readById(id: string): Observable<Product> {
		return this.http.get<Product>(`${ this.baseUrl }/${ id }`).pipe(
			map(item => item),
			catchError(e => this.errorHandler(e))
		);
	}

	update(product: Product): Observable<Product> {
		return this.http.put<Product>(`${ this.baseUrl }/${ product.id }`, product).pipe(
			map(item => item),
			catchError(e => this.errorHandler(e))
		);
	}

	delete(id: number): Observable<Product> {
		return this.http.delete<Product>(`${ this.baseUrl }/${ id }`).pipe(
			map(item => item),
			catchError(e => this.errorHandler(e))
		);
	}
}
