import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../services/role.guard';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
			},
			{
				path: 'builder',
				loadChildren: () =>
					import('./builder/builder.module').then((m) => m.BuilderModule),
			},
			{
				path: 'company-heads',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./company-heads/company-heads.module').then(
						(m) => m.CompanyHeadsModule
					),
			},
			{
				path: 'parties',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./parties/parties.module').then((m) => m.PartiesModule),
			},
			{
				path: 'users',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./users/users.module').then((m) => m.UsersModule),
			},
			{
				path: 'brands',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./brands/brands.module').then((m) => m.BrandsModule),
			},
			{
				path: 'items',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./items/items.module').then((m) => m.ItemsModule),
			},
			{
				path: 'sales',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./sales/sales.module').then((m) => m.SalesModule),
			},
			{
				path: 'purchases',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./purchases/purchases.module').then((m) => m.PurchasesModule),
			},
			{
				path: 'payments',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./payments/payments.module').then((m) => m.PaymentsModule),
			},
			{
				path: 'ledger',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./ledger/ledger.module').then((m) => m.LedgerModule),
			},
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full',
			},
			{
				path: '**',
				redirectTo: 'error/404',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
