import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { authRoutes } from './core/routes/auth-Routes/auth.routes';

export const appRoutes: Routes = [
  // Changing redirectTo path (from auth to home when we work on Home page)
  // Don't forget the Guards for auth and Home
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'auth',
    children:authRoutes
  },
];
