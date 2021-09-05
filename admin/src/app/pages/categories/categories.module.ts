import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../_sharedComponents/confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from './add/add.component';

@NgModule({
	declarations: [AddComponent, CategoriesComponent],
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
		RouterModule.forChild([
			{
				path: '',
				component: CategoriesComponent,
			},
		]),
	],
	entryComponents: [AddComponent, ConfirmationDialogComponent],
})
export class CategoriesModule {}
