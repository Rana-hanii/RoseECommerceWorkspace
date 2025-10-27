import { Routes } from '@angular/router';
import { authGuard } from '../../../core/guards/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
    ],
  },
];
