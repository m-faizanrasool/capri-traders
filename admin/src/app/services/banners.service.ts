import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BannersService {
	constructor(private httpClient: HttpClient) {}

	getBanners() {
		return this.httpClient.get(`${environment.apiUrl}banners`);
	}

	addBanner(banner) {
		return this.httpClient.post(`${environment.apiUrl}banners`, banner);
	}

	updateBanner(banner) {
		return this.httpClient.patch(
			`${environment.apiUrl}banners/` + banner.id,
			banner
		);
	}

	deleteBanner(id) {
		return this.httpClient.delete(`${environment.apiUrl}banners/` + id);
	}
}
