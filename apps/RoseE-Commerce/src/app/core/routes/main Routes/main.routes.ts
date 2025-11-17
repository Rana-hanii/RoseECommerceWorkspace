import { Routes } from '@angular/router';
// import { authGuard } from '../../../core/guards/auth.guard';


export const mainRoutes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    // canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../../features/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];
