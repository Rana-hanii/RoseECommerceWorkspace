import { Routes } from '@angular/router';
import { mainGuard } from '../../../core/guards/main.guard';

export const authRoutes: Routes = [
  {
    path: '',
    canActivate: [mainGuard],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('../../../features/auth/components/login/login.component').then(
            (c) => c.LoginComponent
          ),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import(
            '../../../features/auth/components/register/register.component'
          ).then((c) => c.RegisterComponent),
        title: 'Register',
      },
      {
        path: 'forgotpassword',
        loadComponent: () =>
          import(
            '../../../features/auth/components/forgot-password/forgot-password.component'
          ).then((c) => c.ForgotPasswordComponent),
        title: 'Forgot-Password',
      },
    ],
  },
];
