import { Routes } from '@angular/router';
// import { authGuard } from '../../../core/guards/auth.guard';


export const mainRoutes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    // canActivate: [authGuard],
    children: [
      { path: 'home', loadComponent: () => import('../../../features/home/home.component').then((c) => c.HomeComponent),},
      { path: 'products',loadComponent: () =>import('../../../features/products/products.component').then((c) => c.ProductsComponent),},
      
      {path:'productDetails/:id' , loadComponent:()=>import('../../../features/products/components/product-details/product-details.component').then(
          (c)=> c.ProductDetailsComponent), data: { renderMode: 'client' } } ,
            
      {path:'wishlist' , loadComponent:()=> import(`../../../features/wishList/wishlist.component`).then((c)=>c.WishlistComponent), title:'Wish-List'}
    ],
  },
]; 
