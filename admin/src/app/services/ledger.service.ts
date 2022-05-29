import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class LedgerService {
	constructor(private httpClient: HttpClient) {}

	get(queryParams) {
		const queryParamsString = new HttpParams({
			fromObject: queryParams,
		}).toString();

		return this.httpClient.get(
			`${environment.apiUrl}ledger?${queryParamsString}`
		);
	}
}

export interface LedgerQuery {
	company_head_id: number;
	party_id: number;
	date_from: string;
	date_to: string;
}
