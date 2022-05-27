import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PurchaseService {
	constructor(private httpClient: HttpClient) {}

	getAll() {
		return this.httpClient.get(`${environment.apiUrl}purchases`);
	}

	get(purchase_id) {
		return this.httpClient.get(`${environment.apiUrl}purchases/${purchase_id}`);
	}

	add(purchase) {
		return this.httpClient.post(`${environment.apiUrl}purchases`, purchase);
	}

	update(purchase) {
		return this.httpClient.patch(
			`${environment.apiUrl}purchases/` + purchase.id,
			purchase
		);
	}

	delete(id) {
		return this.httpClient.delete(`${environment.apiUrl}purchases/` + id);
	}
}
