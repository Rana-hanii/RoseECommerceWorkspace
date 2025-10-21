import { Routes } from '@angular/router';
import { authRoutes } from './core/routes/auth-Routes/auth.routes';
import { AuthComponent } from './layouts/auth/auth.component';

export const appRoutes: Route[] = [
  // Changing redirectTo path (from auth to home when we work on Home page)
  // Don't forget the Guards for auth and Home
  { path: '', redirectTo: 'auth',pathMatch:'full'},
  {
    path: 'auth',
    component: AuthComponent,
    title: 'auth',
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      {
        path: 'forgetPassword',
        component: ForgotPasswordComponent,
        title: 'Forgot-Password',
      },
    ],
  },
];
