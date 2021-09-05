import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth';

@Injectable({
	providedIn: 'root',
})
export class RoleGuard implements CanActivate {
	constructor(private authService: AuthService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const currentUser = this.authService.currentUserValue;
		if (
			currentUser.is_super_admin ||
			(currentUser.allowed_access &&
				currentUser.allowed_access.includes(route.routeConfig.path))
		) {
			return true;
		}
		return false;
	}
}
