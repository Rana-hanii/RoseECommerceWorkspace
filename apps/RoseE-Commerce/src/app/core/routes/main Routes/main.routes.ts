import { Routes } from '@angular/router';
import { authGuard } from '../../../core/guards/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../../../app/features/home/component/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];
