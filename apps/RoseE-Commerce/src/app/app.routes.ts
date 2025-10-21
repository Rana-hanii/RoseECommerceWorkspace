import { Routes } from '@angular/router';
import { authRoutes } from './core/routes/auth-Routes/auth.routes';
import { AuthComponent } from './layouts/auth/auth.component';

export const appRoutes: Routes = [

   
  
    {path:"" , redirectTo:'auth/login' , pathMatch:'full'},

    {path:'auth' ,component:AuthComponent , 
         title:'Auth' , children:authRoutes}


];
