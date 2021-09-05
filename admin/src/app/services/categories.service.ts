import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	constructor(private httpClient: HttpClient) {}

	getCategories() {
		return this.httpClient.get(`${environment.apiUrl}categories`);
	}

	addCategory(category) {
		return this.httpClient.post(`${environment.apiUrl}categories`, category);
	}

	updateCategory(category) {
		return this.httpClient.patch(
			`${environment.apiUrl}categories/` + category.id,
			category
		);
	}

	deleteCategory(id) {
		return this.httpClient.delete(`${environment.apiUrl}categories/` + id);
	}
}
