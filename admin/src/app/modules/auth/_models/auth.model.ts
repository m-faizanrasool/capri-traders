export class AuthModel {
	accessToken: string;

	setAuth(auth: any) {
		this.accessToken = auth.accessToken;
	}
}
