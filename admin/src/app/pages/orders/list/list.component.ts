import {
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdersService } from 'src/app/services/orders.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	@Input() status: string;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	loaded = false;
	orders: any[] = [];
	displayedColumns = ['name', 'phone', 'address', 'purchased', 'total'];

	constructor(
		private cdr: ChangeDetectorRef,
		private ordersService: OrdersService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			if (params) {
				this.status = params.status;
				this.fetchOrders();
			}
		});
	}

	fetchOrders() {
		this.loaded = false;
		this.ordersService.getByStatus(this.status).subscribe((response: any) => {
			this.orders = response.orders;
			this.renderOrders();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	renderOrders() {
		this.dataSource = new MatTableDataSource<any>(this.orders);
		this.dataSource.paginator = this.paginator;
	}

	openOrder(id) {
		this.router.navigate([`/orders/details/${this.status}/${id}`]);
		console.log(id);
	}
}
