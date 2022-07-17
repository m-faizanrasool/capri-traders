import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';

import { NgForm } from '@angular/forms';
import { CompanyHeadsService } from 'src/app/services/company-head.service';
import { PartiesService } from 'src/app/services/parties.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { EditComponent } from './../edit/edit.component';
import { ItemQuery, ItemsService } from 'src/app/services/items.service';

import { AddItemDialogComponent } from 'src/app/pages/items/list/add-item-dialog/add-item-dialog.component';

import { CommonService } from 'src/app/services/common.service';
import { SaleService } from 'src/app/services/sale.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
	selector: 'app-add-or-edit',
	templateUrl: './add-or-edit.component.html',
	styleUrls: ['./add-or-edit.component.scss'],
})
export class AddOrEditComponent implements OnInit {
	type: string;
	type_id: number;
	loaded: boolean = false;
	mode: string = 'ADD';

	itemData: any;
	queryParams: ItemQuery;

	company_heads: any = [];
	parties: any = [];

	items: any = [];

	pay_modes: any = [{ name: 'CREDIT' }, { name: 'CASH' }];
	pay_statuses: any = [{ name: 'PENDING' }, { name: 'DONE' }];

	object: any = {
		is_return: false,
		company_head_id: 1,
		date: '2012-04-12',
		bill_no: 123,
		po_no: 123,
		grn: 123,
		party_id: 1,
		pay_mode: 'CASH',
		remarks: 'testing',
		pay_status: 'PENDING',
		object_items: [],
	};

	selectedItem: any = {
		id: '',
		unit_quantity: '',
		rate: '',
	};

	dataSource = new MatTableDataSource([]);

	pageSize = 5;
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

	constructor(
		private activatedRoute: ActivatedRoute,
		private itemsService: ItemsService,
		private saleService: SaleService,
		private purchaseService: PurchaseService,
		private companyHeadsService: CompanyHeadsService,
		private partiesService: PartiesService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	async ngOnInit(): Promise<void> {
		const routeSubscription = this.activatedRoute.params.subscribe(
			async (params) => {
				this.type = params.type;
				this.type_id = params.type_id;
				if (params.type_id) {
					this.mode = 'EDIT';
					switch (params.type) {
						case 'Sale':
							if (params.type_id) {
								await this.saleService
									.get(params.type_id)
									.toPromise()
									.then((response: any) => {
										this.object = response.sale;
										this.object.object_items = response.sale.sale_items;
									});
							}
							break;
						case 'Purchase':
							if (params.type_id) {
								await this.purchaseService
									.get(params.type_id)
									.toPromise()
									.then((response: any) => {
										this.object = response.purchase;
										this.object.object_items = response.purchase.purchase_items;
									});
							}
							break;
					}
				}
				this.refreshDataSource();
			}
		);

		this.itemsService.getCreateItemParams().subscribe((response) => {
			this.itemData = response;
		});

		this.itemsService.getAllItems().subscribe(this.handleResponse.bind(this));

		this.companyHeadsService.getAllCompanyHeads().subscribe((response: any) => {
			this.company_heads = response.company_heads;
		});

		this.partiesService.getAllParties().subscribe((response: any) => {
			this.parties = response.parties;
		});
	}

	handleResponse(response: any) {
		this.items = response.items;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	onSubmit(form: NgForm, is_return: boolean) {
		if (form.invalid) {
			return;
		}

		this.object.is_return = is_return;

		const service =
			this.type === 'Sale' ? this.saleService : this.purchaseService;

		if (this.mode === 'ADD') {
			service.add(this.object).subscribe((response) => {
				console.log(response);
			});
		} else {
			service.update(this.object).subscribe((response) => {
				console.log(response);
			});
		}
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

			let object_item: any = {
				item,
				rate: this.selectedItem.rate,
				unit_quantity: this.selectedItem.unit_quantity,
			};

			this.object.object_items.push(JSON.parse(JSON.stringify(object_item)));

			this.refreshDataSource();
			this.cdr.detectChanges();

			this.totalItems = this.object.object_items.length;
			this.cdr.detectChanges();
			this.loaded = true;
		}
	}

	removeFromObjectItems(index) {
		this.object.object_items.splice(index, 1);
		this.refreshDataSource();
		this.cdr.detectChanges();
	}

	refreshDataSource() {
		this.dataSource = new MatTableDataSource(this.object.object_items);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	editObjectItemsItem(object_item, index) {
		const dialogRef = this.dialog.open(EditComponent, {
			data: { object_item, index: index },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.object.object_items[res.index].unit_quantity =
				res.object_item.unit_quantity;
			this.object.object_items[res.index].rate = res.object_item.rate;

			this.dataSource.data = this.object.object_items;
			this.cdr.detectChanges();
		});
	}
}
