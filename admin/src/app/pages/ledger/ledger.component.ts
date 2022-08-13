import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

import { LedgerQuery, LedgerService } from 'src/app/services/ledger.service';
import { CompanyHeadsService } from 'src/app/services/company-head.service';
import { PartiesService } from 'src/app/services/parties.service';

@Component({
	selector: 'app-ledger',
	templateUrl: './ledger.component.html',
	styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent implements OnInit, AfterViewInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	company_heads: any = [];
	parties: any = [];

	loaded: boolean;

	queryParams: LedgerQuery;
	ledger: any = [];

	date_from = new FormControl('2012-01-01');
	date_to = new FormControl('2023-01-01');
	company_head_id = new FormControl(1);
	party_id = new FormControl(1);

	constructor(
		private ledgerService: LedgerService,
		private companyHeadsService: CompanyHeadsService,
		private partiesService: PartiesService,
		private cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {}

	async ngAfterViewInit() {
		await this.companyHeadsService
			.getAllCompanyHeads()
			.toPromise()
			.then((response: any) => {
				this.company_heads = response.company_heads;
			});

		await this.partiesService
			.getAllParties()
			.toPromise()
			.then((response: any) => {
				this.parties = response.parties;
			});
		this.loaded = true;
		this.cdr.detectChanges();
	}

	getLedger() {
		this.loaded = false;

		this.queryParams = {
			company_head_id: this.company_head_id.value,
			party_id: this.party_id.value,
			date_from: this.date_from.value,
			date_to: this.date_to.value,
		};

		this.ledgerService.get(this.queryParams).subscribe((response: any) => {
			console.log('response', response);
			this.ledger = response.ledger;
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}
}
