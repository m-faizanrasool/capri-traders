import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LedgerQuery, LedgerService } from 'src/app/services/ledger.service';

@Component({
	selector: 'app-ledger',
	templateUrl: './ledger.component.html',
	styleUrls: ['./ledger.component.scss'],
})
export class LedgerComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	loaded: boolean;
	queryParams: LedgerQuery;
	ledger: any;

	constructor(
		private ledgerService: LedgerService,
		private cdr: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.queryParams = {
			company_head_id: 1,
			party_id: 1,
			date_from: '2012-01-01',
			date_to: '2022-01-01',
		};

		this.ledgerService.get(this.queryParams).subscribe((response) => {
			console.log('response', response);
		});
	}
}
