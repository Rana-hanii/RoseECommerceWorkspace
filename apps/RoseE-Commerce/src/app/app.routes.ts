import { Route } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { ForgotPasswordComponent } from './features/auth/components/forgot-password/forgot-password.component';

export const appRoutes: Route[] = [

   

    {path:'' , redirectTo:'auth' , pathMatch:'full' },

    // Changing redirectTo path (from auth to home when we work on Home page) 
    // Don't forget the Guards for auth and Home

    {path:'' , component:AuthComponent , title:'auth' , children:[

        {path:'login' , component:LoginComponent , title:'Login'},
        {path:'register' , component:RegisterComponent , title:'Register'},
        {path:'forgotpassword' ,component:ForgotPasswordComponent , title:'Forgot-Password'}

    ]}


];
