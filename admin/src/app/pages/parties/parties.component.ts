import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { PartiesService } from 'src/app/services/parties.service';

@Component({
	selector: 'app-parties',
	templateUrl: './parties.component.html',
	styleUrls: ['./parties.component.scss'],
})
export class PartiesComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	displayedColumns = ['name', 'actions'];
	parties: any[] = [];
	loaded = false;

	constructor(
		private company_head_service: PartiesService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.company_head_service.getAllParties().subscribe((response: any) => {
			this.parties = response.parties;
			this.renderPartys();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addParty() {
		// const dialogRef = this.dialog.open(AddComponent, {
		// 	width: '440px',
		// 	disableClose: true,
		// });
		// dialogRef.afterClosed().subscribe((res) => {
		// 	if (!res) {
		// 		return;
		// 	}
		// 	this.company_head_service.addParty(res.brand).subscribe(
		// 		(response: any) => {
		// 			this.parties.push(response.brand);
		// 			this.commonService.openSnackBar(response.message);
		// 			this.renderPartys();
		// 		},
		// 		({ error }) => {
		// 			this.commonService.openSnackBar(error.errors.name[0], 4000);
		// 		}
		// 	);
		// });
	}

	renderPartys() {
		this.dataSource = new MatTableDataSource(this.parties);
		this.dataSource.paginator = this.paginator;
	}

	editParty(Party: any) {
		// const dialogRef = this.dialog.open(AddComponent, {
		// 	data: { brand: Party },
		// 	width: '440px',
		// 	disableClose: true,
		// });
		// dialogRef.afterClosed().subscribe((res) => {
		// 	if (!res) {
		// 		return;
		// 	}
		// 	this.company_head_service.updateParty(res.brand).subscribe(
		// 		(response: any) => {
		// 			Party = res.brand;
		// 			this.commonService.openSnackBar(response.message);
		// 		},
		// 		({ error }) => {
		// 			this.commonService.openSnackBar(error.errors.name[0], 4000);
		// 		}
		// 	);
		// });
	}

	deleteParty(id, index) {
		// const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
		// 	data: { title: 'Delete brand', message: 'Are you sure?' },
		// 	width: '440px',
		// 	disableClose: true,
		// });
		// dialogRef.afterClosed().subscribe((res) => {
		// 	if (!res) {
		// 		return;
		// 	}
		// 	if (res.confirm) {
		// 		this.company_head_service.deleteParty(id).subscribe(
		// 			(response: any) => {
		// 				this.parties.splice(index, 1);
		// 				this.renderPartys();
		// 				this.commonService.openSnackBar(response.message);
		// 			},
		// 			({ error }) => {
		// 				this.commonService.openSnackBar(error.message, 4000);
		// 			}
		// 		);
		// 	}
		// });
	}
}
