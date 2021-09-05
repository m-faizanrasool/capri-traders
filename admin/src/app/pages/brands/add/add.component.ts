import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
	title: string;
	mode: string;
	brand = { name: '', id: '' };
	constructor(
		public dialogRef: MatDialogRef<AddComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.brand) {
			this.brand = this.data.brand;
			this.title = 'Update brand';
			this.mode = 'Update';
		} else {
			this.title = 'Add brand';
			this.mode = 'Add';
		}
	}

	onSubmit() {
		this.dialogRef.close({ brand: this.brand, isEdit: false });
	}
}
