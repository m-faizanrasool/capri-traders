import { SalesService } from './../../services/sales.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit/edit.component';
import { CommonService } from 'src/app/services/common.service';
import { ItemQuery, ItemsService } from 'src/app/services/items.service';

import { MatTableDataSource } from '@angular/material/table';

import { AddItemDialogComponent } from './../items/list/add-item-dialog/add-item-dialog.component';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
	itemData: any;
	queryParams: ItemQuery;

	company_heads: any = [
		{ id: 1, name: 'Capri Traders' },
		{ id: 2, name: 'Capri Traders2' },
		{ id: 3, name: 'Capri Traders3' },
	];

	items: any = [];

	pay_modes: any = [{ name: 'credit' }, { name: 'cash' }];
	pay_statuses: any = [{ name: 'pending' }, { name: 'done' }];

	sale: any = {
		company_head: '',
		date: '',
		bill_no: '',
		po_no: '',
		grn: '',
		party_name: '',
		pay_mode: '',
		remarks: '',
		pay_status: '',
		sale_items: [],
	};

	selectedItem: any = {
		id: '',
		quantity: '',
		rate: '',
	};

	dataSource = new MatTableDataSource([]);

	pageSize = 10;
	totalItems: number;

	displayedColumns = [
		'name',
		'brand',
		'quantity',
		'rate',
		'discount',
		'description',
		'image',
		'actions',
	];

	loaded: boolean = false;

	constructor(
		private itemsService: ItemsService,
		private salesService: SalesService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.itemsService.getCreateItemParams().subscribe((response) => {
			this.itemData = response;
		});
		this.itemsService.getAllItems().subscribe(this.handleResponse.bind(this));
	}
	handleResponse(response: any) {
		this.items = response.items;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	onSubmit(form) {
		console.log(form);

		if (form.invalid) {
			return;
		}

		console.log('here', this.sale);
		this.salesService.addSale(this.sale).subscribe((response) => {
			console.log(response);
		});
	}

	addItem() {
		const dialogRef = this.dialog.open(AddItemDialogComponent, {
			data: { paramsData: this.itemData },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
		});
	}

	AddItemToSaleItems() {
		if (this.selectedItem.id) {
			const item = this.items.find(
				(item: any) => item.id == this.selectedItem.id
			);

			item.rate = this.selectedItem.rate;
			item.quantity = this.selectedItem.quantity;

			this.sale.sale_items.push(JSON.parse(JSON.stringify(item)));
			// Refreshing Data Source
			this.dataSource.data = this.sale.sale_items;
			this.cdr.detectChanges();
			this.loaded = true;
		} else {
			return;
		}
	}

	removeFromSaleItems(index) {
		this.sale.sale_items.splice(index, 1);
		this.dataSource.data = this.sale.sale_items;
	}

	editSaleItemsItem(Item, index) {
		const dialogRef = this.dialog.open(EditComponent, {
			data: { item: Item, index: index },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.sale.sale_items[res.index].quantity = res.item.quantity;
			this.sale.sale_items[res.index].rate = res.item.rate;

			this.dataSource.data = this.sale.sale_items;
			this.cdr.detectChanges();
		});
	}
}
