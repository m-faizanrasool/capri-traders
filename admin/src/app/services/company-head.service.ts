import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CompanyHeadsService {
	constructor(private httpClient: HttpClient) {}

	getAllCompanyHeads() {
		return this.httpClient.get(environment.apiUrl + 'company-heads');
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
