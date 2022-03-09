import { SalesService } from './../../services/sales.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit/edit.component';
import { CommonService } from 'src/app/services/common.service';
import { ItemQuery, ItemsService } from 'src/app/services/items.service';

import { MatTableDataSource } from '@angular/material/table';

import { AddItemDialogComponent } from './../items/list/add-item-dialog/add-item-dialog.component';
import { NgForm } from '@angular/forms';
import { CompanyHeadsService } from 'src/app/services/company-head.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
	itemData: any;
	queryParams: ItemQuery;

	company_heads: any = [];

	items: any = [];

	pay_modes: any = [{ name: 'CREDIT' }, { name: 'CASH' }];
	pay_statuses: any = [{ name: 'PENDING' }, { name: 'DONE' }];

	sale: any = {
		is_return: false,
		company_head_id: 1,
		date: '2012-04-12',
		bill_no: 123,
		po_no: 123,
		grn: 123,
		party_name: 'test',
		pay_mode: 'CASH',
		remarks: 'testing',
		pay_status: 'PENDING',
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

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	loaded: boolean = false;

	constructor(
		private itemsService: ItemsService,
		private salesService: SalesService,
		private companyHeadsService: CompanyHeadsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.itemsService.getCreateItemParams().subscribe((response) => {
			this.itemData = response;
		});
		this.itemsService.getAllItems().subscribe(this.handleResponse.bind(this));

		this.companyHeadsService.getAllCompanyHeads().subscribe((response: any) => {
			this.company_heads = response.company_heads;
		});
	}
	handleResponse(response: any) {
		this.items = response.items;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	onSubmit(form: NgForm, is_return: boolean) {
		console.log(form);

		if (form.invalid) {
			return;
		}

		// Set Sale is return or not
		this.sale.is_return = is_return;

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

			this.refreshDataSource();
			this.cdr.detectChanges();

			this.totalItems = this.sale.sale_items.length;
			this.cdr.detectChanges();
			this.loaded = true;
		}
	}

	removeFromSaleItems(index) {
		this.sale.sale_items.splice(index, 1);
		this.refreshDataSource();
		this.cdr.detectChanges();
	}

	refreshDataSource() {
		this.dataSource = new MatTableDataSource(this.sale.sale_items);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
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
