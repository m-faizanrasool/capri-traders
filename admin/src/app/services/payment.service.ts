import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PaymentService {
	constructor(private httpClient: HttpClient) {}

	getAll() {
		return this.httpClient.get(`${environment.apiUrl}sales`);
	}

	get(payment_id) {
		return this.httpClient.get(`${environment.apiUrl}sales/${payment_id}`);
	}

	add(payment) {
		return this.httpClient.post(`${environment.apiUrl}payments`, payment);
	}

	update(payment) {
		return this.httpClient.patch(
			`${environment.apiUrl}payments/` + payment.id,
			payment
		);
	}

	delete(id) {
		return this.httpClient.delete(`${environment.apiUrl}payments/` + id);
	}
}
