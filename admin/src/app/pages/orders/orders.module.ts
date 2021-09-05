import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralModule } from 'src/app/_metronic/partials/content/general/general.module';
import { DetailsComponent } from './details/details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [OrdersComponent, ListComponent, DetailsComponent],
	imports: [
		CommonModule,
		GeneralModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatTabsModule,
		MatIconModule,
		MatCardModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: OrdersComponent,
				children: [
					{
						path: 'details/:status/:id',
						component: DetailsComponent,
					},
					{ path: ':status', component: ListComponent },
				],
			},
		]),
	],
})
export class OrdersModule {}
