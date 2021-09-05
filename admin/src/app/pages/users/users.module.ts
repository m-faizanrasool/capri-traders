import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { MatIconModule } from '@angular/material/icon';
import { AddUserDialogComponent } from './list/add-user-dialog/add-user-dialog.component';

import {
	MatDialogModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@NgModule({
	declarations: [UsersComponent, ListComponent, AddUserDialogComponent],
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
		MatSlideToggleModule,
		ImageCropperModule,
		RouterModule.forChild([
			{
				path: '',
				component: UsersComponent,
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
	entryComponents: [AddUserDialogComponent, ConfirmationDialogComponent],
})
export class UsersModule {}
