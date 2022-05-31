import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LedgerComponent } from './ledger.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	declarations: [LedgerComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		RouterModule.forChild([
			{
				path: '',
				component: LedgerComponent,
				children: [
					{
						path: '',
						pathMatch: 'full',
					},
				],
			},
		]),
	],
})
export class LedgerModule {}
