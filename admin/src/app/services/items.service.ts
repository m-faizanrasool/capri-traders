import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {
	constructor(private httpClient: HttpClient) {}

	getItems(queryParams) {
		const queryParamsString = new HttpParams({
			fromObject: queryParams,
		}).toString();

		console.log(queryParamsString);

		return this.httpClient.get(
			environment.apiUrl + 'filtered-items?' + queryParamsString
		);
	}

	getAllItems() {
		return this.httpClient.get(environment.apiUrl + 'all-items');
	}

	getCreateItemParams() {
		return this.httpClient.get(environment.apiUrl + 'items/create');
	}

	addItem(item) {
		return this.httpClient.post(`${environment.apiUrl}items`, item);
	}

	updateItem(item) {
		return this.httpClient.patch(`${environment.apiUrl}items/` + item.id, item);
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
	brands?: string;
}
