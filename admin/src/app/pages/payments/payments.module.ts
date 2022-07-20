import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from '../payments/payments.component';
import { RouterModule } from '@angular/router';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
	declarations: [PaymentsComponent, AddOrEditComponent],
	imports: [
		CommonModule,
		FormsModule,
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
				component: PaymentsComponent,
				children: [
					{
						path: '',
						redirectTo: 'add-or-edit',
						pathMatch: 'full',
					},
					{
						path: 'add-or-edit',
						component: AddOrEditComponent,
					},
				],
			},
		]),
	],
})
export class PaymentsModule {}
