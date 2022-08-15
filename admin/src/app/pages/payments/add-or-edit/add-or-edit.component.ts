import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CompanyHeadsService } from 'src/app/services/company-head.service';
import { ItemsService } from 'src/app/services/items.service';
import { PartiesService } from 'src/app/services/parties.service';
import { PaymentService } from 'src/app/services/payment.service';
import { SaleService } from 'src/app/services/sale.service';
import { AddItemDialogComponent } from '../../items/list/add-item-dialog/add-item-dialog.component';

@Component({
	selector: 'app-add-or-edit',
	templateUrl: './add-or-edit.component.html',
	styleUrls: ['./add-or-edit.component.scss'],
})
export class AddOrEditComponent implements OnInit {
	company_heads: any = [];
	parties: any = [];
	itemData: any;
	mode: string = 'ADD';

	pay_types: any = [{ name: 'CASH' }, { name: 'CHEQUE' }];

	found_bills: any = [];
	attached_bills: any = [];

	payment: any = {
		company_head_id: 1,
		party_id: 1,
		action: '',
		type: '',
		date: '',
		remarms: '',
		sale_ids: [],
		narration: '',
		cheque_no: '',
		cheque_date: '',
		amount: '',
		tax: '',
	};

	constructor(
		private itemsService: ItemsService,
		private companyHeadsService: CompanyHeadsService,
		private partiesService: PartiesService,
		private paymentService: PaymentService,
		private saleService: SaleService,
		public dialog: MatDialog,
		private cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.itemsService.getCreateItemParams().subscribe((response) => {
			this.itemData = response;
		});

		this.companyHeadsService.getAllCompanyHeads().subscribe((response: any) => {
			this.company_heads = response.company_heads;
		});

		this.partiesService.getAllParties().subscribe((response: any) => {
			this.parties = response.parties;
		});
	}

	// addItem() {
	// 	const dialogRef = this.dialog.open(AddItemDialogComponent, {
	// 		data: { paramsData: this.itemData },
	// 		disableClose: true,
	// 	});

	// 	dialogRef.afterClosed().subscribe((res) => {
	// 		if (!res) {
	// 			return;
	// 		}
	// 	});
	// }

	calc_tax(tax_percent: number) {
		if (this.payment.amount) {
			let result = (this.payment.amount * tax_percent) / 100;
			this.payment.tax = result;
		}
	}

	find_bill(bill_no: number) {
		const queryParams = {
			bill_no,
			company_head_id: this.payment.company_head_id,
			party_id: this.payment.party_id,
			pay_status: 'PENDING',
		};

		this.saleService.search(queryParams).subscribe((response: any) => {
			this.found_bills = response;
			console.log(this.found_bills);

			this.cdr.detectChanges();
		});
	}

	addBill(bill: any) {
		const alreadyAttached = this.attached_bills.find(
			(attached_bill: any) => attached_bill.id == bill.id
		);

		if (alreadyAttached) {
			return;
		}

		this.attached_bills.push(bill);
	}

	removeBill(index: any) {
		this.attached_bills.splice(index, 1);
	}

	onSubmit(form: NgForm, action: string) {
		if (form.invalid) {
			return;
		}

		this.payment.action = action;
		console.log(this.payment);

		this.payment.sale_ids = this.attached_bills.map((bill: any) => {
			return bill.id;
		});

		if (this.mode === 'ADD') {
			this.paymentService.add(this.payment).subscribe((response) => {
				console.log(response);
			});
		} else {
			this.paymentService.update(this.payment).subscribe((response) => {
				console.log(response);
			});
		}
	}
}
