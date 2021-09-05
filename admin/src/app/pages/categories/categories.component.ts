import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from 'src/app/services/categories.service';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from './add/add.component';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: any;
	loaded = false;
	displayedColumns = ['name', 'actions'];
	categories: any[] = [];
	constructor(
		private categoriesService: CategoriesService,
		private commonService: CommonService,
		private cdr: ChangeDetectorRef,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.categoriesService.getCategories().subscribe((response: any) => {
			this.categories = response.categories;
			this.renderCategories();
			this.loaded = true;
			this.cdr.detectChanges();
		});
	}

	renderCategories() {
		this.dataSource = new MatTableDataSource<any>(this.categories);
		this.dataSource.paginator = this.paginator;
	}

	addCategory() {
		const dialogRef = this.dialog.open(AddComponent, {
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.categoriesService.addCategory(res.category).subscribe(
				(response: any) => {
					this.categories.push(response.category);
					this.commonService.openSnackBar(response.message);
					this.renderCategories();
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	editCategory(Category) {
		const dialogRef = this.dialog.open(AddComponent, {
			data: { category: Category },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			this.categoriesService.updateCategory(res.category).subscribe(
				(response: any) => {
					Category = res.category;
					this.commonService.openSnackBar(response.message);
				},
				({ error }) => {
					this.commonService.openSnackBar(error.errors.name[0], 4000);
				}
			);
		});
	}

	deleteCategory(id, index) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { title: 'Delete category', message: 'Are you sure?' },
			width: '440px',
			disableClose: true,
		});

		dialogRef.afterClosed().subscribe((res) => {
			if (!res) {
				return;
			}

			if (res.confirm) {
				this.categoriesService.deleteCategory(id).subscribe(
					(response: any) => {
						this.categories.splice(index, 1);
						this.renderCategories();
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
