import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class OrdersService {
	constructor(private httpClient: HttpClient) {}

	getByStatus(status: string) {
		return this.httpClient.get(`${environment.apiUrl}orders/status/${status}`);
	}

	getOrder(id: any) {
		return this.httpClient.get(`${environment.apiUrl}orders/${id}`);
	}

	changeOrderStatus(data) {
		return this.httpClient.post(`${environment.apiUrl}orders/status`, data);
	}
}
