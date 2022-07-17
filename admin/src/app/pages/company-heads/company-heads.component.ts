import { CompanyHeadsService } from './../../services/company-head.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from './add/add.component';

@Component({
	selector: 'app-company-heads',
	templateUrl: './company-heads.component.html',
	styleUrls: ['./company-heads.component.scss'],
})
export class CompanyHeadsComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	displayedColumns = ['name', 'actions'];
	company_heads: any[] = [];
	loaded = false;

	constructor(
		private companyHeadService: CompanyHeadsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.companyHeadService.getAllCompanyHeads().subscribe((response: any) => {
			this.company_heads = response.company_heads;
			this.renderCompanyHeads();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addCompanyHead() {
		const dialogRef = this.dialog.open(AddComponent, {
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.companyHeadService.addCompanyHead(res.company_head).subscribe(
				(response: any) => {
					this.company_heads.push(response.company_head);
					this.commonService.openSnackBar(response.message);
					this.renderCompanyHeads();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	renderCompanyHeads() {
		this.dataSource = new MatTableDataSource(this.company_heads);
		this.dataSource.paginator = this.paginator;
	}

	editCompanyHead(company_head: any) {
		const dialogRef = this.dialog.open(AddComponent, {
			data: { company_head },
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			this.companyHeadService.updateCompanyHead(res.company_head).subscribe(
				(response: any) => {
					company_head = res.company_head;
					this.commonService.openSnackBar(response.message);
					this.cdr.detectChanges();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	deleteCompanyHead(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete company_head', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});
		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}
			if (res.confirm) {
				this.companyHeadService.deleteCompanyHead(id).subscribe(
					(response: any) => {
						this.company_heads.splice(index, 1);
						this.renderCompanyHeads();
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
