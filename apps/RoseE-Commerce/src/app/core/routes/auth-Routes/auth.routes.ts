import {  Routes } from "@angular/router";

export const authRoutes:Routes = [

    {path:'login' ,
 loadComponent: ()=> import('../../../features/auth/components/login/login.component').then((c)=>c.LoginComponent) , title:'Login'},

{path:'register' ,
 loadComponent:()=>import('../../../features/auth/components/register/register.component').then((c)=>c.RegisterComponent),title:'Register'},

{path:'forgotpassword',
loadComponent:()=>import('../../../features/auth/components/forgot-password/forgot-password.component').then((c)=>c.ForgotPasswordComponent),
 title:'Forgot-Password'}

]