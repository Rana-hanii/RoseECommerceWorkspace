import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layouts/main/mainlayout.component';
import { dashboardRoutes } from './core/routes/dashboard.routes';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'main/overview', pathMatch: 'full' },

  {
    path: 'main',
    component: MainlayoutComponent,
    title: 'main',
    children: dashboardRoutes,
  },
];
