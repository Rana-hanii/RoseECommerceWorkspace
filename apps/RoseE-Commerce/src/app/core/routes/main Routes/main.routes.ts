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
<<<<<<< HEAD
          import('../../../features/home/home.component').then(
=======
          import('../../../../app/features/home/home.component').then(
>>>>>>> origin/develop
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];
