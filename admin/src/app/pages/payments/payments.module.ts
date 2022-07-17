import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from '../payments/payments.component';
import { RouterModule } from '@angular/router';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';

@NgModule({
	declarations: [PaymentsComponent, AddOrEditComponent],
	imports: [
		CommonModule,
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
