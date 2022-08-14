import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardsModule } from '../../_metronic/partials/content/dashboards/dashboards.module';
import { InvoiceComponent } from 'src/app/components/invoice/invoice.component';

@NgModule({
  declarations: [DashboardComponent, InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class DashboardModule {}
