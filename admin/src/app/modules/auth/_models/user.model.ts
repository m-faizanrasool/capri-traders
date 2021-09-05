import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
	id: number;
	name: string;
	email: string;
	password: string;
	// tslint:disable-next-line: variable-name
	role_id: number;
	is_super_admin: boolean;
	allowed_access: any;
	occupation: string;
	companyName: string;
	phone: string;
	pic: string;
	// email settings
	emailSettings: {
		emailNotification: boolean;
		sendCopyToPersonalEmail: boolean;
		activityRelatesEmail: {
			youHaveNewNotifications: boolean;
			youAreSentADirectMessage: boolean;
			someoneAddsYouAsAsAConnection: boolean;
			uponNewOrder: boolean;
			newMembershipApproval: boolean;
			memberRegistration: boolean;
		};
		updatesFromKeenthemes: {
			newsAboutKeenthemesProductsAndFeatureUpdates: boolean;
			tipsOnGettingMoreOutOfKeen: boolean;
			thingsYouMissedSindeYouLastLoggedIntoKeen: boolean;
			newsAboutMetronicOnPartnerProductsAndOtherServices: boolean;
			tipsOnMetronicBusinessProducts: boolean;
		};
	};

	setUser(user: any) {
		this.id = user.id;
		this.name = user.name || '';
		this.email = user.email || '';
		this.pic = user.pic || './assets/media/users/default.jpg';
		this.role_id = user.role_id || '';
		this.occupation = user.occupation || '';
		this.companyName = user.companyName || '';
		this.phone = user.phone || '';
	}
}
