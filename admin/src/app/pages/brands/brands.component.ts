import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from './add/add.component';
import { BrandsService } from 'src/app/services/brands.service';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@Component({
	selector: 'app-brands',
	templateUrl: './brands.component.html',
	styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	displayedColumns = ['name', 'actions'];
	brands: any[] = [];
	loaded = false;

	constructor(
		private brandsService: BrandsService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.brandsService.getBrands().subscribe((response: any) => {
			this.brands = response.brands;
			this.renderBrands();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	addBrand() {
		const dialogRef = this.dialog.open(AddComponent, {
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.brandsService.addBrand(res.brand).subscribe(
				(response: any) => {
					this.brands.push(response.brand);
					this.commonService.openSnackBar(response.message);
					this.renderBrands();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	renderBrands() {
		this.dataSource = new MatTableDataSource(this.brands);
		this.dataSource.paginator = this.paginator;
	}

	editBrand(Brand: any) {
		const dialogRef = this.dialog.open(AddComponent, {
			data: { brand: Brand },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.brandsService.updateBrand(res.brand).subscribe(
				(response: any) => {
					Brand = res.brand;
					this.commonService.openSnackBar(response.message);
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	deleteBrand(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete brand', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.brandsService.deleteBrand(id).subscribe(
					(response: any) => {
						this.brands.splice(index, 1);
						this.renderBrands();
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
