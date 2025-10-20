import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { authRoutes } from './core/routes/auth Routes/auth.routes';

export const appRoutes: Routes = [

   
  
    {path:"" , redirectTo:'auth/login' , pathMatch:'full'},

    {path:'auth' , component:AuthComponent , title:'auth' , children:authRoutes}


];
