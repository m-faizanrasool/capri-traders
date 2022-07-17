import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesComponent } from '../parties/parties.component';
import { RouterModule } from '@angular/router';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@NgModule({
	declarations: [PartiesComponent, AddComponent],
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
				component: PartiesComponent,
			},
		]),
	],
})
export class PartiesModule {}
