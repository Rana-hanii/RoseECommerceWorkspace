import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },

  {
    path: '',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: 'overview',
        data: { breadcrumb: 'Overview' },
        loadComponent: () =>
          import('../../features/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Overview',
      },
      {
        path: 'categories',
        data: { breadcrumb: 'Categories' },
        loadComponent: () =>
          import('../../features/categories/categiroes.component').then(
            (c) => c.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'occasions',
        data: { breadcrumb: 'Occasions' },
        loadComponent: () =>
          import('../../features/occasions/occasions.component').then(
            (c) => c.OccasionsComponent
          ),
        title: 'Occasions',
      },
      {
        path: 'products',
        data: { breadcrumb: 'Products' },
        loadComponent: () =>
          import('../../features/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'account',
        data: { breadcrumb: 'Account' },
        loadComponent: () =>
          import('../../features/account/account.component').then(
            (c) => c.AccountComponent
          ),
        title: 'Account',
      },
    ],
  },
];
