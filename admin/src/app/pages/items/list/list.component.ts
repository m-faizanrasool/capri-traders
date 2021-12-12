import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, finalize, startWith, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { CommonService } from 'src/app/services/common.service';
import { ItemQuery, ItemsService } from 'src/app/services/itens.service';
import { ConfirmationDialogComponent } from '../../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded = false;
	subscriptions: Subscription[] = [];
	search = new FormControl('');
	pageIndex = 0;
	pageSize = 20;
	items: any[] = [];
	totalItems: number;
	itemData: any;
	queryParams: ItemQuery;

	displayedColumns = [
		'name',
		'brand',
		'quantity',
		'purchase_price',
		'sale_price',
		'discount',
		'description',
		'image',
		'actions',
	];

	constructor(
		private itemsService: ItemsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.itemsService.getCreateItemParams().subscribe((response) => {
			this.itemData = response;
		});
	}

	ngAfterViewInit() {
		this.search.valueChanges.subscribe(() => {
			this.paginator.pageIndex = 0;
		});

		const filterSubscription = this.paginator.page
			.pipe(startWith({}), switchMap(this.prepareQueryParams.bind(this)))
			.subscribe(this.handleResponse.bind(this));

		const searchSubscription = this.search.valueChanges
			.pipe(debounceTime(1000), switchMap(this.prepareQueryParams.bind(this)))
			.subscribe(this.handleResponse.bind(this));

		this.subscriptions.push(filterSubscription, searchSubscription);
	}

	prepareQueryParams() {
		this.loaded = false;

		this.queryParams = {
			page_index: this.paginator.pageIndex,
			search: this.search.value,
			items_per_page: this.pageSize,
		};

		return this.itemsService.getItems(this.queryParams);
	}

	handleResponse(response: any) {
		this.totalItems = response.total;
		this.items = response.items;
		this.loaded = true;
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
			this.itemsService
				.getItems(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	editItem(Item) {
		const dialogRef = this.dialog.open(AddItemDialogComponent, {
			data: { paramsData: this.itemData, item: Item },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.itemsService
				.getItems(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	toggleVisiblity(item) {
		item.disabled = true;
		item.is_visible = !item.is_visible;
		this.itemsService
			.toggle_visibility(item.id)
			.pipe(
				finalize(() => {
					item.disabled = false;
					this.cdr.detectChanges();
				})
			)
			.subscribe();
	}

	deleteItem(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete category', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.itemsService.deleteItem(id).subscribe(
					(response: any) => {
						const items = [...this.items];
						items.splice(index, 1);
						this.items = items;
						this.cdr.detectChanges();
						this.commonService.openSnackBar(response.message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
			}
		});
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((sub) => sub.unsubscribe());
	}
}
