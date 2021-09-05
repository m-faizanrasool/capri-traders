import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { CouponsService } from 'src/app/services/coupons.service';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
	selector: 'app-coupons',
	templateUrl: './coupons.component.html',
	styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded = true;
	displayedColumns = ['code', 'discount', 'expiry', 'minOrder', 'actions'];
	dataSource: any;
	coupons: any[] = [];

	constructor(
		private couponsService: CouponsService,
		private cdr: ChangeDetectorRef,
		private dialog: MatDialog,
		private commonService: CommonService
	) {}

	ngOnInit(): void {
		this.fetchCoupons();
	}

	fetchCoupons() {
		this.loaded = false;
		this.couponsService.getCoupons().subscribe((response: any) => {
			this.coupons = response.coupons;
			this.dataSource = new MatTableDataSource(this.coupons);
			this.dataSource.paginator = this.paginator;
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addCoupon() {
		const dialogRef = this.dialog.open(AddDialogComponent, {
			data: {},
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.fetchCoupons();
		});
	}

	editCoupon(Coupon) {
		const dialogRef = this.dialog.open(AddDialogComponent, {
			data: { coupon: Coupon },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.fetchCoupons();
		});
	}

	deleteCoupon(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete category', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.couponsService.deleteCoupon(id).subscribe(
					(response: any) => {
						this.coupons.splice(index, 1);
						this.fetchCoupons();
						this.commonService.openSnackBar(response.message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
			}
		});
	}
}
