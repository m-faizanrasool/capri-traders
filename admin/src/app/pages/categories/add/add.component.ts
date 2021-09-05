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
	category = { name: '', id: '' };

	constructor(
		public dialogRef: MatDialogRef<AddComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.category) {
			this.category = this.data.category;
			this.title = 'Update category';
			this.mode = 'Update';
		} else {
			this.title = 'Add category';
			this.mode = 'Add';
		}
	}

	onSubmit() {
		this.dialogRef.close({ category: this.category, isEdit: false });
	}
}
