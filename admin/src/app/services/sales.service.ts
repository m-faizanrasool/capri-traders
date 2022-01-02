import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SalesService {
	constructor(private httpClient: HttpClient) {}

	addSale(sale) {
		return this.httpClient.post(`${environment.apiUrl}sales`, sale);
	}

	updateSale(sale) {
		return this.httpClient.patch(`${environment.apiUrl}sales/` + sale.id, sale);
	}

	toggle_visibility(id) {
		return this.httpClient.post(
			`${environment.apiUrl}items/toggle-visibility`,
			{
				id,
			}
		);
	}

	deleteItem(id) {
		return this.httpClient.delete(`${environment.apiUrl}items/` + id);
	}
}

export interface ItemQuery {
	page_index: number;
	items_per_page: number;
	search?: string;
	categories?: string;
	brands?: string;
}
