import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../_models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../_models/auth.model';

@Injectable({
	providedIn: 'root',
})
export class AuthHTTPService {
	constructor(private http: HttpClient) {}

	// public methods
	login(username: string, password: string, role = 'admin'): Observable<any> {
		return this.http.post<AuthModel>(`${environment.apiUrl}auth/login`, {
			username,
			password,
			role,
		});
	}

	// CREATE =>  POST: add a new user to the server
	createUser(user: UserModel): Observable<UserModel> {
		return this.http.post<UserModel>(`${environment.apiUrl}user/create`, user);
	}

	// Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
	forgotPassword(email: string): Observable<boolean> {
		return this.http.post<boolean>(
			`${environment.apiUrl}auth/forgot-password`,
			{
				email,
			}
		);
	}

	getUserByToken(): Observable<UserModel> {
		return this.http.get<UserModel>(`${environment.apiUrl}authenticated-user`);
	}
}
