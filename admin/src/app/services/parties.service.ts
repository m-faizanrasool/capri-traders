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

	// getCreateCompanyHeadParams() {
	// 	return this.httpClient.get(environment.apiUrl + 'company-heads/create');
	// }

	// addCompanyHead(companyHead) {
	// 	return this.httpClient.post(`${environment.apiUrl}company-heads`, companyHead);
	// }

	// updateCompanyHead(companyHead) {
	// 	return this.httpClient.patch(`${environment.apiUrl}company-heads/` + companyHead.id, companyHead);
	// }

	// deleteCompanyHead(id) {
	// 	return this.httpClient.delete(`${environment.apiUrl}company-heads/` + id);
	// }
}
