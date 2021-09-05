import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-cancel-order-comfirmation',
	templateUrl: './cancel-order-comfirmation.component.html',
	styleUrls: ['./cancel-order-comfirmation.component.scss'],
})
export class CancelOrderComfirmationComponent implements OnInit {
	title: string;
	reason: string;
	constructor(
		public dialogRef: MatDialogRef<CancelOrderComfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		this.title = this.data.title;
	}

	yes() {
		this.dialogRef.close({ confirm: true, reason: this.reason });
	}

	no() {
		this.dialogRef.close({ confirm: false });
	}
}
