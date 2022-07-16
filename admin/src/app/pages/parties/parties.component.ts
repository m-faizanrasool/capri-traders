import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { PartiesService } from 'src/app/services/parties.service';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from './add/add.component';

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
		private partyService: PartiesService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.partyService.getAllParties().subscribe((response: any) => {
			this.parties = response.parties;
			this.renderParties();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addParty() {
		const dialogRef = this.dialog.open(AddComponent, {
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.partyService.addParty(res.party).subscribe(
				(response: any) => {
					this.parties.push(response.party);
					this.commonService.openSnackBar(response.message);
					this.renderParties();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	renderParties() {
		this.dataSource = new MatTableDataSource(this.parties);
		this.dataSource.paginator = this.paginator;
	}

	editParty(party: any) {
		const dialogRef = this.dialog.open(AddComponent, {
			data: { party },
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.partyService.updateParty(res.party).subscribe(
				(response: any) => {
					party = res.party;
					this.commonService.openSnackBar(response.message);
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	deleteParty(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete party', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			if (res.confirm) {
				this.partyService.deleteParty(id).subscribe(
					(response: any) => {
						this.parties.splice(index, 1);
						this.renderParties();
						this.commonService.openSnackBar(response.message);
					},
					({ error }) => {
						this.commonService.openSnackBar(error.message, 4000);
					}
				);
			}
		});
	}
}
