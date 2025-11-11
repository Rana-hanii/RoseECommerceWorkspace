import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { authRoutes } from './core/routes/auth-Routes/auth.routes';
import { mainRoutes } from './core/routes/main Routes/main.routes';
import { MainComponent } from './layouts/main/main.component';

export const appRoutes: Routes = [

  { path: '', redirectTo: 'main/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'auth',
    children:authRoutes
  },
  {
    path: 'main',
    component: MainComponent,
    title: 'main',
    children:mainRoutes
  },
];
