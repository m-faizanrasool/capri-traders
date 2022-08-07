import * as moment from 'moment';

export class SalePurchaseModel {
	is_return: boolean;
	company_head_id: any;
	party_id: any;
	date: string;
	bill_no: number;
	po_no: number;
	grn: number;
	pay_mode: string;
	remarks: string;
	pay_status: string;
	object_items: any[];

	constructor() {
		this.is_return = false;
		// this.company_head_id = 1;
		this.date = moment().format('YYYY-MM-DD');
		// this.bill_no = 123;
		// this.po_no = 123;
		// this.grn = 123;
		// this.party_id = 1;
		// this.pay_mode = 'CASH';
		// this.remarks = 'testing';
		// this.pay_status = 'PENDING';
		this.object_items = [];
	}
}
