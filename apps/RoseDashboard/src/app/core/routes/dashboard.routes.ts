import { Routes } from '@angular/router';
import { adminGuardGuard } from '../guards/adminGuard/admin-guard.guard';
export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full',
  },

  {
    path: '',
    data: { breadcrumb: 'Dashboard' },
    //
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

        title: 'Categories',
        loadComponent: () =>
          import('../../features/categories/categiroes.component').then(
            (c) => c.CategiroesComponent
          ),
        children: [
          {
            path: '',
            data: { breadcrumb: 'Table' },
            title: 'Categories Table',
            loadComponent: () =>
              import(
                '../../features/categories/components/categoreisTable/categoriesTable.component'
              ).then((c) => c.CategoriesTableComponent),
          },
          {
            path: 'addCategory',
            data: { breadcrumb: 'Add' },
            title: 'Add Category',
            loadComponent: () =>
              import(
                '../../features/categories/components/addCategory/addCategory.component'
              ).then((c) => c.AddCategoryComponent),
          },
          {
            path: 'updateCategory/:id',
            data: { breadcrumb: 'Update' },
            title: 'Update Category',
            loadComponent: () =>
              import(
                '../../features/categories/components/updateCategories/updateCategories.component'
              ).then((c) => c.UpdateCategoriesComponent),
          },
        ],
      },
      {
        path: 'occasions',
        title: 'Occasions',
        data: { breadcrumb: 'Occasions' },
        loadComponent: () =>
          import('../../features/occasions/occasions.component').then(
            (c) => c.OccasionsComponent
          ),
        children: [
          {
            path: '',
            data: { breadcrumb: 'Table' },
            title: 'Occasions Table',
            loadComponent: () =>
              import(
                '../../features/occasions/components/occasionsTable/occasionsTable.component'
              ).then((c) => c.OccasionsTableComponent),
          },
          {
            path: 'addOccasion',
            data: { breadcrumb: 'Add' },
            title: 'Add Occasion',
            loadComponent: () =>
              import(
                '../../features/occasions/components/addOccasion/addOccasion.component'
              ).then((c) => c.AddOccasionComponent),
          },
          {
            path: 'updateOccasions/:id',
            data: { breadcrumb: 'Update' },
            title: 'Update Occasion',
            loadComponent: () =>
              import(
                '../../features/occasions/components/updateOccasions/updateOccasions.component'
              ).then((c) => c.UpdateOccasionsComponent),
          },
        ],
      },
      {
        path: 'products',
        data: { breadcrumb: 'Products' },
        children: [
          {
            path: '',
            data: { breadcrumb: 'Table' },
            title: 'Products',
            loadComponent: () =>
              import('../../features/products/products.component').then(
                (c) => c.ProductsComponent
              ),
          },

          {
            path: 'updateProduct/:id',
            data: { breadcrumb: 'Update' },
            title: 'Update Product',
            loadComponent: () =>
              import(
                '../../features/products/components/updateProduct/updateProduct.component'
              ).then((c) => c.UpdateProductComponent),
          },

          {
            path: 'addProduct',
            data: { breadcrumb: 'Add' },
            title: 'Add Product',
            loadComponent: () =>
              import(
                '../../features/products/components/addProduct/addProduct.component'
              ).then((c) => c.AddProductComponent),
          },
        ],
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
  {
    path: 'unauthorized',
    title: 'Access Denied',
    loadComponent: () =>
      import(
        '../../shared/components/unauthorized/unauthorized.component'
      ).then((c) => c.UnauthorizedComponent),
  },
];
