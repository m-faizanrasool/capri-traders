import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SalesService {
	constructor(private httpClient: HttpClient) {}

	getProducts(queryParams) {
		const queryParamsString = new HttpParams({
			fromObject: queryParams,
		}).toString();

		return this.httpClient.get(
			environment.apiUrl + 'filtered-products?' + queryParamsString
		);
	}

	getCreateProductParams() {
		return this.httpClient.get(environment.apiUrl + 'products/create');
	}

	addProduct(product) {
		return this.httpClient.post(`${environment.apiUrl}products`, product);
	}

	updateProduct(product) {
		return this.httpClient.patch(
			`${environment.apiUrl}products/` + product.id,
			product
		);
	}

	toggle_visibility(id) {
		return this.httpClient.post(
			`${environment.apiUrl}products/toggle-visibility`,
			{
				id,
			}
		);
	}

	deleteProduct(id) {
		return this.httpClient.delete(`${environment.apiUrl}products/` + id);
	}
}

export interface ProductQuery {
	page_index: number;
	items_per_page: number;
	search?: string;
	categories?: string;
	brands?: string;
}
