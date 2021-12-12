import { AddItemDialogComponent } from '../items/list/add-item-dialog/add-item-dialog.component';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit/edit.component';
import { CommonService } from 'src/app/services/common.service';
import { ItemQuery, ItemsService } from 'src/app/services/itens.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-purchases',
	templateUrl: './purchases.component.html',
	styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
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
		bill_no: '',
		po_no: '',
		grn: '',
		party_name: '',
		pay_mode: '',
		remarks: '',
		pay_status: '',
	};

	selectedItem: any = {
		id: '',
		quantity: '',
		rate: '',
	};

	dataSource = new MatTableDataSource([]);

	sale_items: any = [];
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

	onSubmit() {
		console.log(this.sale);
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
		const item = this.items.find(
			(item: any) => item.id == this.selectedItem.id
		);

		// check if item already added to sale items
		const findItem = this.sale_items.find(
			(item: any) => item.id == this.selectedItem.id
		);

		if (!findItem) {
			item.rate = this.selectedItem.rate;
			item.quantity = this.selectedItem.quantity;

			this.sale_items.push(item);
			// Refreshing Data Source
			this.dataSource.data = this.sale_items;
			this.cdr.detectChanges();
			this.loaded = true;
		}
	}

	removeFromSaleItems(id) {
		this.sale_items = this.sale_items.filter(function (item) {
			return item.id != id;
		});
		this.dataSource.data = this.sale_items;
	}

	editSaleItemsItem(Item) {
		const dialogRef = this.dialog.open(EditComponent, {
			data: { item: Item },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			const item = this.sale_items.find(
				(item: any) => item.id == this.selectedItem.id
			);
			item.quantity = res.item.quantity;
			item.rate = res.item.rate;

			this.dataSource.data = this.sale_items;
			this.cdr.detectChanges();
		});
	}
}
