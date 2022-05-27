import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SaleService {
	constructor(private httpClient: HttpClient) {}

	getAll() {
		return this.httpClient.get(`${environment.apiUrl}sales`);
	}

	get(sale_id) {
		return this.httpClient.get(`${environment.apiUrl}sales/${sale_id}`);
	}

	add(sale) {
		return this.httpClient.post(`${environment.apiUrl}sales`, sale);
	}

	update(sale) {
		return this.httpClient.patch(`${environment.apiUrl}sales/` + sale.id, sale);
	}

	delete(id) {
		return this.httpClient.delete(`${environment.apiUrl}sales/` + id);
	}
}
