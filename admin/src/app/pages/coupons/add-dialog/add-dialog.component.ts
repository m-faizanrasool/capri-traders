import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
	selector: 'app-add-dialog',
	templateUrl: './add-dialog.component.html',
	styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
	coupon: any = {
		id: '',
		discount: '',
		code: '',
		expiry: '',
		minimum_order: '',
	};

	minDate = new Date().toISOString();
	disabled: boolean;

	viewLoading = false;
	constructor(
		public dialogRef: MatDialogRef<AddDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private couponsService: CouponsService,
		private commonService: CommonService,
		private datePipe: DatePipe
	) {}

	ngOnInit(): void {
		if (this.data.coupon) {
			this.coupon = this.data.coupon;
		}
	}

	getTitle() {
		if (this.coupon.id) {
			return `Edit Coupon '${this.coupon.code}'`;
		}

		return 'New Coupon';
	}

	onSubmit() {
		this.coupon.expiry = this.datePipe.transform(
			this.coupon.expiry,
			'yyyy-MM-dd'
		);
		this.disabled = true;
		if (this.coupon.id) {
			this.couponsService
				.updateCoupon(this.coupon)
				.pipe(finalize(() => (this.disabled = false)))
				.subscribe((response: any) => {
					this.commonService.openSnackBar(response.message);
					this.dialogRef.close(response.message);
				});
		} else {
			this.couponsService
				.addCoupon(this.coupon)
				.pipe(finalize(() => (this.disabled = false)))
				.subscribe((response: any) => {
					this.commonService.openSnackBar(response.message);
					this.dialogRef.close(response.message);
				});
		}
	}
}
