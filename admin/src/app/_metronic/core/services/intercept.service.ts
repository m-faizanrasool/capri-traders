import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth';

import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptService implements HttpInterceptor {
	private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
	constructor(private injector: Injector) {}
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const auth = JSON.parse(localStorage.getItem(this.authLocalStorageToken));

		if (auth && auth.accessToken) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${auth.accessToken}`,
				},
			});
		}

		return next.handle(request).pipe(
			tap(
				(event) => {
					return event;
				},
				(error) => {
					// http response status code
					// console.log('----response----');
					// console.error('status code:');
					if (error.status === 401) {
						const authService = this.injector.get(AuthService);
						authService.logout();
					} else {
						console.error(error.status);
						console.error(error.message);
					}
				}
			)
		);
	}
}
