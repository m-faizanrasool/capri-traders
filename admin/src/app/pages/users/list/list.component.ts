import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { merge, Subscription } from 'rxjs';

import { CommonService } from 'src/app/services/common.service';

import { ConfirmationDialogComponent } from '../../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UserQuery, UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/modules/auth';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded = false;
	subscriptions: Subscription[] = [];
	search = new FormControl('');
	role = new FormControl('');
	pageIndex = 0;
	pageSize = 20;
	users: any[] = [];
	roles: any[] = [];
	totalUsers: number;
	userData: any;
	queryParams: UserQuery;
	currentUser = this.authService.currentUserValue;

	displayedColumns = ['name', 'email', 'phone', 'role', 'actions'];

	constructor(
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		private usersService: UsersService,
		public dialog: MatDialog,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.usersService.getCreateUserParams().subscribe((response: any) => {
			this.userData = response;
			this.roles = response.roles;
		});
	}

	ngAfterViewInit(): void {
		this.search.valueChanges.subscribe(() => {
			this.paginator.pageIndex = 0;
		});
		this.role.valueChanges.subscribe(() => {
			this.paginator.pageIndex = 0;
		});

		const filterSubscription = merge(
			this.role.valueChanges,
			this.paginator.page
		)
			.pipe(startWith({}), switchMap(this.prepareQueryParams.bind(this)))
			.subscribe(this.handleResponse.bind(this));

		const searchSubscription = this.search.valueChanges
			.pipe(debounceTime(1000), switchMap(this.prepareQueryParams.bind(this)))
			.subscribe(this.handleResponse.bind(this));

		this.subscriptions.push(filterSubscription, searchSubscription);
	}

	prepareQueryParams() {
		this.loaded = false;

		this.queryParams = {
			page_index: this.paginator.pageIndex,
			search: this.search.value,
			items_per_page: this.pageSize,
			role_id: this.role.value,
		};

		return this.usersService.getUsers(this.queryParams);
	}

	handleResponse(response: any) {
		this.totalUsers = response.total;
		this.users = response.users;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	addUser() {
		const dialogRef = this.dialog.open(AddUserDialogComponent, {
			data: { paramsData: this.userData },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.usersService
				.getUsers(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	editUser(User) {
		const dialogRef = this.dialog.open(AddUserDialogComponent, {
			data: { paramsData: this.userData, user: User },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.usersService
				.getUsers(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	deleteUser(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete User', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.usersService.deleteUser(id).subscribe(
					(response: any) => {
						const users = [...this.users];
						users.splice(index, 1);
						this.users = users;
						this.cdr.detectChanges();
						this.commonService.openSnackBar(response.message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
			}
		});
	}

	ngOnDestroy(): void {}
}
