import { Routes } from '@angular/router';
import { authGuard } from '../../../core/guards/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    // redirectTo:'home',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../../../app/features/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];
