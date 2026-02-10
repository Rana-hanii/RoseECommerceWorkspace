import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layouts/main/mainlayout.component';
import { dashboardRoutes } from './core/routes/dashboard.routes';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dash/overview', pathMatch: 'full' },

  {
    path: 'dash',
    component: MainlayoutComponent,
    title: 'Dashboard',
    children: dashboardRoutes,
  },

  {
    path: 'main',
    component: MainlayoutComponent,
    title: 'main',
    children: dashboardRoutes,
  },
];
