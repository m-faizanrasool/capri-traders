import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { ItemsService } from 'src/app/services/itens.service';

@Component({
	selector: 'app-add-item-dialog',
	templateUrl: './add-item-dialog.component.html',
	styleUrls: ['./add-item-dialog.component.scss'],
})
export class AddItemDialogComponent implements OnInit {
	item: any = {
		brand_id: '',
		name: '',
		description: '',
		purchase_price: '',
		sale_price: '',
		unit_id: '',
		unit_quantity: '',
		discount: '',
		order: '',
	};
	itemForm: FormGroup;

	brands: any[];
	units: any[];
	mode: string;
	disabled: boolean;

	viewLoading = true;

	errorMessage: string;

	imageChangedEvent: any = '';
	croppedImage: any = '';

	constructor(
		public dialogRef: MatDialogRef<AddItemDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private itemsService: ItemsService,
		private commonService: CommonService
	) {}

	ngOnInit(): void {
		this.brands = this.data.paramsData.brands;
		this.units = this.data.paramsData.units;

		if (this.data.item) {
			this.item = { ...this.data.item };
			this.mode = 'edit';
		}
		this.viewLoading = false;
	}

	getTitle(): string {
		if (this.item.id) {
			return `Edit Item '${this.item.name}'`;
		}

		return 'New Item';
	}

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
		this.item.image = '';
	}
	imageCropped(event: ImageCroppedEvent) {
		this.item.image = event.base64;
		this.item.image_url = event.base64;
	}

	imageChanged() {
		this.item.image = '';
	}

	onSubmit() {
		this.disabled = true;
		if (this.mode === 'edit') {
			this.itemsService
				.updateItem(this.item)
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
			this.itemsService
				.addItem(this.item)
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
