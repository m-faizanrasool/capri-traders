import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchasesComponent } from './purchases.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { MatIconModule } from '@angular/material/icon';

import {
	MatDialogModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';

import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { ListComponent } from './list/list.component';

@NgModule({
	declarations: [PurchasesComponent, ListComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatIconModule,
		GeneralModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatSortModule,
		NgSelectModule,
		RouterModule.forChild([
			{
				path: '',
				component: PurchasesComponent,
				children: [
					{
						path: '',
						redirectTo: 'list',
						pathMatch: 'full',
					},
					{
						path: 'list',
						component: ListComponent,
					},
					{
						path: 'add-or-edit',
						loadChildren: () =>
							import(
								'src/app/components/sale-purchase-shared/sale-purchase-shared.module'
							).then((m) => m.SalePurchaseSharedModule),
					},
				],
			},
		]),
	],
	providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'mat-dialog-container-wrapper',
				height: 'auto',
				width: '900px',
			},
		},
	],
	entryComponents: [ConfirmationDialogComponent],
})
export class PurchasesModule {}
