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
				path: 'banners',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./banners/banners.module').then((m) => m.BannersModule),
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
				path: 'categories',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./categories/categories.module').then(
						(m) => m.CategoriesModule
					),
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
				path: 'ledger',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./ledger/ledger.module').then((m) => m.LedgerModule),
			},
			{
				path: 'orders',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('./orders/orders.module').then((m) => m.OrdersModule),
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
