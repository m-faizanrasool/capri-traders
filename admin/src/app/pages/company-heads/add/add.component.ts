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
	company_head = { name: '', id: '' };
	constructor(
		public dialogRef: MatDialogRef<AddComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		if (this.data && this.data.company_head) {
			this.company_head = this.data.company_head;
			this.title = 'Update company_head';
			this.mode = 'Update';
		} else {
			this.title = 'Add company_head';
			this.mode = 'Add';
		}
	}

	onSubmit() {
		this.dialogRef.close({ company_head: this.company_head, isEdit: false });
	}
}
