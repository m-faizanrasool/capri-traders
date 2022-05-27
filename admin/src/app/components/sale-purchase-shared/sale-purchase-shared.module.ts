import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SalePurchaseSharedComponent } from './sale-purchase-shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
	declarations: [
		SalePurchaseSharedComponent,
		AddOrEditComponent,
		EditComponent,
	],
	imports: [
		FormsModule,
		CommonModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatDialogModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatSortModule,
		RouterModule.forChild([
			{
				path: '',
				component: AddOrEditComponent,
			},
		]),
	],
})
export class SalePurchaseSharedModule {}
