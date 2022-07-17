import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavigateService } from 'src/app/services/navigate.service';
import { MatPaginator } from '@angular/material/paginator';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded = false;
	purchases: any[] = [];

	pageIndex = 0;
	pageSize = 20;
	totalPurchases: number;

	displayedColumns = [
		'company_head',
		'date',
		'bill_no',
		'po_no',
		'grn',
		'party_id',
		'pay_mode',
		'pay_status',
		'remarks',
		'is_return',
		'actions',
	];

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private cdr: ChangeDetectorRef,
		public navigateService: NavigateService,
		private purchaseService: PurchaseService
	) {}

	ngOnInit(): void {
		this.purchaseService.getAll().subscribe((data: any) => {
			this.purchases = data.purchases;
			this.totalPurchases = this.purchases.length;
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addPurchase() {
		this.router.navigate(['purchases/add-or-edit', { type: 'Purchase' }]);
	}

	editPurchase(purchase_id) {
		this.router.navigate([
			'purchases/add-or-edit',
			{
				type: 'Purchase',
				type_id: purchase_id,
			},
		]);
	}

	deletePurchase(purchase_id, index) {}
}
