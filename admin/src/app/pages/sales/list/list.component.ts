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
import {
	ProductQuery,
	ProductsService,
} from 'src/app/services/products.service';
import { ConfirmationDialogComponent } from '../../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddSaleDialogComponent } from './add-sale-dialog/add-sale-dialog.component';

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
	products: any[] = [];
	totalProducts: number;
	productData: any;
	queryParams: ProductQuery;

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
		private productsService: ProductsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.productsService.getCreateProductParams().subscribe((response) => {
			this.productData = response;
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

		return this.productsService.getProducts(this.queryParams);
	}

	handleResponse(response: any) {
		this.totalProducts = response.total;
		this.products = response.products;
		this.loaded = true;
		this.cdr.detectChanges();
	}

	addProduct() {
		const dialogRef = this.dialog.open(AddSaleDialogComponent, {
			data: { paramsData: this.productData },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.productsService
				.getProducts(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	editProduct(Product) {
		const dialogRef = this.dialog.open(AddSaleDialogComponent, {
			data: { paramsData: this.productData, product: Product },
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.productsService
				.getProducts(this.queryParams)
				.subscribe(this.handleResponse.bind(this));
		});
	}

	toggleVisiblity(product) {
		product.disabled = true;
		product.is_visible = !product.is_visible;
		this.productsService
			.toggle_visibility(product.id)
			.pipe(
				finalize(() => {
					product.disabled = false;
					this.cdr.detectChanges();
				})
			)
			.subscribe();
	}

	deleteProduct(id, index) {
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
				this.productsService.deleteProduct(id).subscribe(
					(response: any) => {
						const products = [...this.products];
						products.splice(index, 1);
						this.products = products;
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
