import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { AddComponent } from './add/add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';

@NgModule({
	declarations: [BannersComponent, AddComponent],
	imports: [
		CommonModule,
		GeneralModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatIconModule,
		MatProgressSpinnerModule,
		FormsModule,
		MatFormFieldModule,
		MatDialogModule,
		ImageCropperModule,
		RouterModule.forChild([
			{
				path: '',
				component: BannersComponent,
			},
		]),
	],
	entryComponents: [AddComponent, ConfirmationDialogComponent],
})
export class BannersModule {}
