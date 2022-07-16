import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PartiesService {
	constructor(private httpClient: HttpClient) {}

	getAllParties() {
		return this.httpClient.get(environment.apiUrl + 'parties');
	}

	// getCreatePartyParams() {
	// 	return this.httpClient.get(environment.apiUrl + 'company-heads/create');
	// }

	addParty(party) {
		return this.httpClient.post(`${environment.apiUrl}parties`, party);
	}

	updateParty(party) {
		return this.httpClient.patch(
			`${environment.apiUrl}parties/` + party.id,
			party
		);
	}

	deleteParty(id) {
		return this.httpClient.delete(`${environment.apiUrl}parties/` + id);
	}
}
