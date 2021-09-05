import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { OrdersService } from 'src/app/services/orders.service';
import { SubheaderService } from 'src/app/_metronic/partials/layout';
import { CancelOrderComfirmationComponent } from '../../_sharedComponents/cancel-order-comfirmation/cancel-order-comfirmation.component';
import { ConfirmationDialogComponent } from '../../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	orderId: any;

	status: any;

	order: any;
	productsVendors: any[] = [];
	riders: any[] = [];
	loaded = false;

	nextStatus: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private changeDetectorRef: ChangeDetectorRef,
		private orderService: OrdersService,
		private subheaderService: SubheaderService,
		private commonService: CommonService,
		private location: Location,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(async (params) => {
			if (params) {
				this.status = params.status;
				this.orderId = params.id;

				this.init();
				this.setNextStatus();

				await this.fetchOrder();
			}
		});
	}

	init() {
		this.subheaderService.setBreadcrumbs([
			{
				title: 'Orders',
				linkPath: `orders/${this.status}`,
				linkText: 'Orders',
			},
		]);
	}

	private setNextStatus() {
		switch (this.status) {
			case 'pending':
				this.nextStatus = 'accepted';
				break;
			case 'accepted':
				this.nextStatus = 'picked';
				break;
			case 'picked':
				this.nextStatus = 'delivered';
				break;

			default:
				break;
		}
	}

	productVendors(id?: number) {
		return this.productsVendors.find((product: any) => product.id === id)
			.vendors;
	}

	async fetchOrder() {
		await this.orderService
			.getOrder(this.orderId)
			.toPromise()
			.then((response: any) => {
				this.order = response.order;
				this.productsVendors = response.products_vendors;
				this.riders = response.riders;
				this.changeDetectorRef.markForCheck();
				this.loaded = true;
			});
	}

	onSubmit() {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: {
				title:
					'Order ' +
					this.nextStatus.replace(/^./, this.nextStatus[0].toUpperCase()),
				message: 'Are you sure?',
			},
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				const data = { order_id: this.orderId, status: this.nextStatus };
				this.orderService.changeOrderStatus(data).subscribe((response: any) => {
					this.commonService.openSnackBar(response.message, 2000);
					this.location.back();
				});
			}
		});
	}

	cancelOrder() {
		const dialogRef = this.dialog.open(CancelOrderComfirmationComponent, {
			data: { title: 'Cancel order', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.orderService
					.changeOrderStatus({
						order_id: this.orderId,
						status: 'cancelled',
						reason: res.reason,
					})
					.subscribe((response: any) => {
						this.commonService.openSnackBar(response.message, 2000);
						this.location.back();
					});
			}
		});
	}
}
