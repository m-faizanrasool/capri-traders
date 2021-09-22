import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../products/list/add-product-dialog/add-product-dialog.component';
import { CommonService } from 'src/app/services/common.service';
import {
	ProductQuery,
	ProductsService,
} from 'src/app/services/products.service';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
	productData: any;
	queryParams: ProductQuery;

	company_heads: any = [
		{ id: 1, name: 'Capri Traders' },
		{ id: 2, name: 'Capri Traders2' },
		{ id: 3, name: 'Capri Traders3' },
	];

	pay_modes: any = [{ name: 'credit' }, { name: 'cash' }];
	pay_statuses: any = [{ name: 'pending' }, { name: 'done' }];

	sale: any = {
		company_head: '',
		bill_no: '',
		po_no: '',
		grn: '',
		party_name: '',
		pay_mode: '',
		remarks: '',
		pay_status: '',
	};

	sale_items: any = [];

	constructor(
		private productsService: ProductsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.productsService.getCreateProductParams().subscribe((response) => {
			this.productData = response;
		});
		console.log(this.company_heads);
	}

	onSubmit() {
		console.log(this.sale);
	}

	addProduct() {
		const dialogRef = this.dialog.open(AddProductDialogComponent, {
			data: { paramsData: this.productData },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
		});
	}
}
