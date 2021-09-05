import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CouponsService {
	constructor(private httpClient: HttpClient) {}

	getCoupons() {
		return this.httpClient.get(`${environment.apiUrl}coupons`);
	}

	addCoupon(coupon) {
		return this.httpClient.post(`${environment.apiUrl}coupons`, coupon);
	}

	updateCoupon(coupon) {
		return this.httpClient.patch(
			`${environment.apiUrl}coupons/` + coupon.id,
			coupon
		);
	}

	deleteCoupon(id) {
		return this.httpClient.delete(`${environment.apiUrl}coupons/` + id);
	}
}
