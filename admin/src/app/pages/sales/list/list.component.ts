import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigateService } from 'src/app/services/navigate.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		private router: Router,
		public navigateService: NavigateService
	) {}

	ngOnInit(): void {}

	addSale() {
		this.router.navigate(['sales/list/add-or-edit']);
	}

	editSale() {
		this.router.navigate(['sales/list/add-or-edit', { sale_id: 1 }]);
	}
}
