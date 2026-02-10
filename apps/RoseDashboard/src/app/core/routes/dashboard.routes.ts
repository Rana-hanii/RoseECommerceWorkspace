import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

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
    ],
  },
];
