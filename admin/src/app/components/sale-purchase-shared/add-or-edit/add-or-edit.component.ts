import { Observable, ReplaySubject, Subject } from 'rxjs';
import {
	Component,
	OnInit,
	ChangeDetectorRef,
	ViewChild,
	OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';

import { FormControl, NgForm } from '@angular/forms';
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

import { SalePurchaseModel } from 'src/app/models/SalePurchase.model';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-add-or-edit',
	templateUrl: './add-or-edit.component.html',
	styleUrls: ['./add-or-edit.component.scss'],
})
export class AddOrEditComponent implements OnInit, OnDestroy {
	type: string;
	type_id: number;
	loaded: boolean = false;
	disabled: boolean;
	mode: string = 'ADD';

	itemData: any;
	queryParams: ItemQuery;

	company_heads: any = [];
	parties: any = [];

	items: any = [];

	pay_modes: any = [{ name: 'CREDIT' }, { name: 'CASH' }];
	pay_statuses: any = [{ name: 'PENDING' }, { name: 'DONE' }];

	object: SalePurchaseModel = new SalePurchaseModel();

	selectedItem: any = {
		id: '',
		unit_quantity: '',
		rate: '',
	};

	filteredItems: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
	filteredItemsCtrl: FormControl = new FormControl();
	OnDestroy = new Subject<void>();

	dataSource = new MatTableDataSource([]);

	pageSize = 5;
	totalItems: number;

	displayedColumns = [
		'name',
		'brand',
		'quantity',
		'rate',
		// 'discount',
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
	) { }

	async ngOnInit(): Promise<void> {
		this.object.is_return = false;
		this.object.company_head_id = 1;
		// this.object.date = '';
		this.object.bill_no = 123;
		this.object.po_no = 123;
		this.object.grn = 123;
		this.object.party_id = 1;
		this.object.pay_mode = 'CASH';
		this.object.remarks = 'testing';
		this.object.pay_status = 'PENDING';
		this.object.object_items = [];
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

		this.filteredItemsCtrl.valueChanges
			.pipe(takeUntil(this.OnDestroy))
			.subscribe(() => {
				this.filterItems();
			});

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

	ngOnDestroy(): void {
		this.OnDestroy.next();
		this.OnDestroy.complete();
	}

	handleResponse(response: any) {
		this.items = response.items;
		this.filteredItems.next(this.items.slice());

		this.loaded = true;
		this.cdr.detectChanges();
	}

	filterItems() {
		if (!this.items) {
			return;
		}

		let search = this.filteredItemsCtrl.value;

		if (!search) {
			this.filteredItems.next(this.items.slice());
			return;
		} else {
			search = search.toLowerCase();
		}

		this.filteredItems.next(
			this.items.filter(
				(item) => item && item.name.toLowerCase().indexOf(search) > -1
			)
		);
	}

	payModeChanged() {
		switch (this.object.pay_mode) {
			case 'CREDIT':
				this.object.pay_status = 'PENDING';
				break;
			case 'CASH':
				this.object.pay_status = 'DONE';
				break;

			default:
				break;
		}
	}

	async onSubmit(form: NgForm, is_return: boolean) {
		if (this.disabled || form.invalid) {
			return;
		}

		this.object.is_return = is_return;

		const service =
			this.type === 'Sale' ? this.saleService : this.purchaseService;

		this.disabled = true;

		if (this.mode === 'ADD') {
			await service
				.add(this.object)
				.toPromise()
				.then(
					(response: any) => {
						this.object = new SalePurchaseModel();
						this.refreshDataSource();
						this.commonService.openSnackBar(response.message);
					},
					(error) => {
						this.commonService.openSnackBar(error.error.message);
					}
				);
		} else {
			await service
				.update(this.object)
				.toPromise()
				.then((response: any) => {
					this.commonService.openSnackBar(response.message);
				});
		}
		this.disabled = false;
		this.cdr.detectChanges();
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

	AddItemToObjectItems() {
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

			this.totalItems = this.object.object_items.length;
			this.refreshDataSource();
		}
	}

	removeFromObjectItems(index) {
		this.object.object_items.splice(index, 1);
		this.refreshDataSource();
	}

	refreshDataSource() {
		this.dataSource = new MatTableDataSource(this.object.object_items);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.calculate()
		this.cdr.detectChanges();
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

			// wasn't requitred
			this.object.object_items[res.index].unit_quantity =
				res.object_item.unit_quantity;
			this.object.object_items[res.index].rate = res.object_item.rate;
			this.object.object_items[res.index].description = res.object_item.description;

			this.refreshDataSource();
		});
	}

	calculate() {
		const total = this.object.object_items.reduce((accumulator, item) => {
			return accumulator + (item.rate * item.unit_quantity);
		}, 0);
		this.object.total = total - this.object.discount;
	}
}
