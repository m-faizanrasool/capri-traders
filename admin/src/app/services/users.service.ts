import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private httpClient: HttpClient) {}

	getUsers(queryParams) {
		const queryParamsString = new HttpParams({
			fromObject: queryParams,
		}).toString();

		return this.httpClient.get(
			environment.apiUrl + 'users?' + queryParamsString
		);
	}

	getCreateUserParams() {
		return this.httpClient.get(environment.apiUrl + 'users/create');
	}

	addUser(user) {
		return this.httpClient.post(`${environment.apiUrl}users`, user);
	}

	updateUser(user) {
		return this.httpClient.patch(`${environment.apiUrl}users/` + user.id, user);
	}

	deleteUser(id) {
		return this.httpClient.delete(`${environment.apiUrl}users/` + id);
	}
}

export interface UserQuery {
	page_index: number;
	items_per_page: number;
	search?: string;
	role_id?: number;
}
