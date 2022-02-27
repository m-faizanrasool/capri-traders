import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LedgerComponent],
	imports: [
		CommonModule,
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
