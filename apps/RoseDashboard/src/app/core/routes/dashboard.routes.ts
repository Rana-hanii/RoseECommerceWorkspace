import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },

  {
    path: '',
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('../../features/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Overview',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../../features/categories/categiroes.component').then(
            (c) => c.CategiroesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'occasions',
        loadComponent: () =>
          import('../../features/occasions/occasions.component').then(
            (c) => c.OccasionsComponent
          ),
        title: 'Occasions',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../../features/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../../features/account/account.component').then(
            (c) => c.AccountComponent
          ),
        title: 'Account',
      },
    ],
  },
];
