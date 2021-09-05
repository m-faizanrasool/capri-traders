import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BrandsService {
	constructor(private httpClient: HttpClient) {}

	getBrands() {
		return this.httpClient.get(`${environment.apiUrl}brands`);
	}

	addBrand(brand) {
		return this.httpClient.post(`${environment.apiUrl}brands`, brand);
	}

	updateBrand(brand) {
		return this.httpClient.patch(
			`${environment.apiUrl}brands/` + brand.id,
			brand
		);
	}

	deleteBrand(id) {
		return this.httpClient.delete(`${environment.apiUrl}brands/` + id);
	}
}
