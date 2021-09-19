import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { PurchasesComponent } from './purchases.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { MatIconModule } from '@angular/material/icon';
import { AddPurchaseDialogComponent } from './list/add-purchase-dialog/add-purchase-dialog.component';
import {
	MatDialogModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgSelectModule } from '@ng-select/ng-select';

import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@NgModule({
	declarations: [ListComponent, PurchasesComponent, AddPurchaseDialogComponent],
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
		NgSelectModule,
		ImageCropperModule,
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
	entryComponents: [AddPurchaseDialogComponent, ConfirmationDialogComponent],
})
export class PurchasesModule {}
