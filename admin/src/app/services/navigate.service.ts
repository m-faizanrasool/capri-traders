import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class NavigateService {
	constructor(private router: Router) {}

	navigateWithExtras(commands: any[], params: any) {
		const navigationExtras: NavigationExtras = { state: params };
		this.router.navigate(commands, navigationExtras);
	}
}
