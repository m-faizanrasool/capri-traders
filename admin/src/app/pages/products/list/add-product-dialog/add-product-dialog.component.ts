import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-add-product-dialog',
	templateUrl: './add-product-dialog.component.html',
	styleUrls: ['./add-product-dialog.component.scss'],
})
export class AddProductDialogComponent implements OnInit {
	product: any = {
		vendor_ids: '',
		brand_id: '',
		category_id: '',
		name: '',
		description: '',
		price: '',
		unit_id: '',
		unit_quantity: '',
		discount: '',
		order: '',
	};
	productForm: FormGroup;

	brands: any[];
	categories: any[];
	vendors: any[] = [];
	units: any[];
	mode: string;
	disabled: boolean;

	viewLoading = true;

	errorMessage: string;

	imageChangedEvent: any = '';
	croppedImage: any = '';

	constructor(
		public dialogRef: MatDialogRef<AddProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private productsService: ProductsService,
		private commonService: CommonService
	) {}

	ngOnInit(): void {
		this.brands = this.data.paramsData.brands;
		this.categories = this.data.paramsData.categories;
		this.units = this.data.paramsData.units;
		this.vendors = this.data.paramsData.vendors;

		if (this.data.product) {
			this.product = { ...this.data.product };
			this.mode = 'edit';
		}
		this.viewLoading = false;
	}

	getTitle(): string {
		if (this.product.id) {
			return `Edit Product '${this.product.name}'`;
		}

		return 'New Product';
	}

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
		this.product.image = '';
	}
	imageCropped(event: ImageCroppedEvent) {
		this.product.image = event.base64;
		this.product.image_url = event.base64;
	}

	imageChanged() {
		this.product.image = '';
	}

	onSubmit() {
		this.disabled = true;
		if (this.mode === 'edit') {
			this.productsService
				.updateProduct(this.product)
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
			this.productsService
				.addProduct(this.product)
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
