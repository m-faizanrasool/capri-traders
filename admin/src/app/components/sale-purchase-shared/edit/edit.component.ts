import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	title: string;
	mode: string;
	object_item = { unit_quantity: 0, rate: 0, description: '', id: '' };
	index: any;
	constructor(
		public dialogRef: MatDialogRef<EditComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.object_item) {
			this.object_item = this.data.object_item;
			this.index = this.data.index;
			this.title = 'Update Quantity or Rate';
			this.mode = 'Update';
		} else {
			this.title = 'Add Item';
			this.mode = 'Add';
		}
	}

	onSubmit() {
		this.dialogRef.close({
			object_item: this.object_item,
			index: this.index,
			isEdit: false,
		});
	}
}
