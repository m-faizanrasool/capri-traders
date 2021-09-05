import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CouponsComponent } from './coupons.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {
	MatDialogModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [CouponsComponent, AddDialogComponent],
	imports: [
		CommonModule,
		GeneralModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatInputModule,
		MatDatepickerModule,
		MatIconModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: CouponsComponent,
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
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{
			provide: MAT_DATE_FORMATS,
			useValue: {
				parse: {
					dateInput: 'LL',
				},
				display: {
					dateInput: 'YYYY-MM-DD',
					monthYearLabel: 'YYYY',
					dateA11yLabel: 'LL',
					monthYearA11yLabel: 'YYYY',
				},
			},
		},
		DatePipe,
	],
	entryComponents: [AddDialogComponent],
})
export class CouponsModule {}
