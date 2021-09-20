import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-add-user-dialog',
	templateUrl: './add-user-dialog.component.html',
	styleUrls: ['./add-user-dialog.component.scss'],
})
export class AddUserDialogComponent implements OnInit {
	user: any = {
		role_id: '',
		allowed_access: '',
		name: '',
		email: '',
		phone: '',
		password: '',
	};

	pages: any = [
		{ value: 'users', name: 'Users' },
		{ value: 'brands', name: 'Brands' },
		{ value: 'categories', name: 'Categories' },
		{ value: 'products', name: 'Products' },
		{ value: 'sales', name: 'Sales' },
		{ value: 'purchases', name: 'Purchases' },
		{ value: 'orders', name: 'Orders' },
	];

	userForm: FormGroup;

	roles: any[];
	mode: string;
	passChange = false;
	viewLoading = true;
	disabled: boolean;

	errorMessage: string;

	constructor(
		public dialogRef: MatDialogRef<AddUserDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private usersService: UsersService,
		private commonService: CommonService
	) {}

	ngOnInit(): void {
		this.roles = this.data.paramsData.roles;
		if (this.data.user) {
			this.user = this.data.user;
			this.mode = 'edit';
		}
		this.viewLoading = false;
	}

	getTitle(): string {
		if (this.user.id) {
			return `Edit User '${this.user.name}'`;
		}

		return 'New User';
	}

	onSubmit() {
		this.disabled = true;
		if (this.mode === 'edit') {
			this.usersService
				.updateUser(this.user)
				.pipe(finalize(() => (this.disabled = false)))
				.subscribe(
					({ message }: any) => {
						this.commonService.openSnackBar(message);
						this.dialogRef.close(message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
		} else {
			this.usersService
				.addUser(this.user)
				.pipe(finalize(() => (this.disabled = false)))
				.subscribe(
					({ message }: any) => {
						this.commonService.openSnackBar(message);
						this.dialogRef.close(message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
		}
	}
}
