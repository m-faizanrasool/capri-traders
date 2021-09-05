import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from './add/add.component';
import { BannersService } from 'src/app/services/banners.service';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-banners',
	templateUrl: './banners.component.html',
	styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	displayedColumns = ['image', 'actions'];
	banners: any[] = [];
	loaded = false;

	constructor(
		private bannersService: BannersService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.bannersService.getBanners().subscribe((response: any) => {
			this.banners = response.banners;
			this.renderBanners();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addBanner() {
		const dialogRef = this.dialog.open(AddComponent, {
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.bannersService.addBanner(res.banner).subscribe(
				(response: any) => {
					this.banners.push(response.banner);
					this.commonService.openSnackBar(response.message);
					this.renderBanners();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.message, 4000);
				}
			);
		});
	}

	renderBanners() {
		this.dataSource = new MatTableDataSource(this.banners);
		this.dataSource.paginator = this.paginator;
	}

	editBanner(Banner: any) {
		const dialogRef = this.dialog.open(AddComponent, {
			data: { banner: Banner },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.bannersService.updateBanner(res.banner).subscribe(
				(response: any) => {
					Banner = res.banner;
					this.commonService.openSnackBar(response.message);
					this.renderBanners();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.message, 4000);
				}
			);
		});
	}

	deleteBanner(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete banner', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.bannersService.deleteBanner(id).subscribe(
					(response: any) => {
						this.banners.splice(index, 1);
						this.renderBanners();
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
