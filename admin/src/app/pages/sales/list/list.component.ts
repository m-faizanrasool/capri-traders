import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavigateService } from 'src/app/services/navigate.service';
import { SaleService } from './../../../services/sale.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded = false;
	sales: any[] = [];

	pageIndex = 0;
	pageSize = 20;
	totalSales: number;

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
		private saleService: SaleService
	) {}

	ngOnInit(): void {
		this.saleService.getAll().subscribe((data: any) => {
			this.sales = data.sales;
			this.totalSales = this.sales.length;
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addSale() {
		this.router.navigate(['sales/add-or-edit', { type: 'Sale' }]);
	}

	editSale(sale_id) {
		this.router.navigate([
			'sales/add-or-edit',
			{
				type: 'Sale',
				type_id: sale_id,
			},
		]);
	}

	deleteSale(sale_id, index) {}
}
