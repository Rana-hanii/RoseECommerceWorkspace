import { Component, computed, inject, OnInit, PLATFORM_ID, Signal, signal, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../../features/home/services/home.service';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { Menu } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as productsActions from "./../../store/products/products.actions"
import * as wishlistSelectors from "./../../store/wishList/wishlist.selectors"
import * as wishlistActions from "./../../store/wishList/wishlist.actions"
import * as CartActions from "./../../store/cart/cart.actions"
import * as CartSelectors from "./../../store/cart/cart.selectors"
import { Observable } from 'rxjs';
import { CartService } from '../../features/cart/services/cart.service';
import { UserCart } from '../../features/cart/interfaces/userCart/user-cart';
import { environment } from '../../environments/environment';
import { DarkModeService } from '../../shared/services/dark-mode/dark-mode.service';



@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive ,DrawerModule, ButtonModule, AvatarModule , Menu ,FormsModule  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit{

  locationMessage= '';

  showUserMenu= false ;
  isLogin=signal<boolean>(true)
  userName=''
  lastName=''
  role=''
  items:any[]=[]
  textSearch=signal<string>('') 
  wishlistidsCount$!:Observable<string[]>
  cartidsCount$!:Observable<string[]>
  cartId!:string
  
 
  private readonly http=inject(HttpClient)
  private readonly authService=inject(AuthService)
  private readonly homeService=inject(HomeService)
  private readonly cartService=inject(CartService)
  private readonly cookieService=inject(CookieService)
  private readonly plat_Id=inject(PLATFORM_ID)
  private readonly store=inject(Store)
  private readonly dark=inject(DarkModeService)


  ngOnInit(): void {
    
    if (isPlatformBrowser(this.plat_Id)) {
      this.checkLoggedUser() 
        this.getUserLocation();
         this.userData()
          this.getUsersCartId()
          this.loadWishlist()
          this.loadCart()
         
    }
  } 



  checkLoggedUser():void{
      this.isLogin = this.homeService.isLogged
  }

  userMenu(){
    this.showUserMenu = !this.showUserMenu
  }

  onSearch(event:Event){
    const value = (event.target as HTMLInputElement).value
    this.store.dispatch(productsActions.filteringProducts({filter :{search :value}}))
  }


  isBrowser(){
    return isPlatformBrowser(this.plat_Id)
  }

 

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getCityName(lat, lon);
        },
        (error) => {
          this.locationMessage = `Unable to get location: ${error.message}`;
        }
      );
    } else {
      this.locationMessage = 'Geolocation is not supported by this browser.';
    }
  }

  getCityName(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        const city = data.address.city
        
        this.locationMessage = `${city}`;
      },
      error: (err) => {
        this.locationMessage = 'Unable to retrieve city name';
        console.error(err);
      }
    });
  }



  logout():void{
     this.cookieService.delete('roseToken')
    // (,'') to show login icon when loggedout
    this.homeService.isLogged.set(false)
  } 


  userData():void{
    this.authService.getData().subscribe({
      next:(res)=>{
        this.userName=res.user.firstName
        this.lastName=res.user.lastName 
        this.role=res.user.role
        this.userItems()
      },error:(err)=>{
          console.log(err);
          
      }
    })
  } 


     @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e:any): void {
        this.drawerRef.close(e);
    } 


    navigateToDashboard():void{
      window.location.href=environment.roseDashboard
    }

    visible= false;


    userItems():void{
        this.items = [
                    {
                      label: 'My Profile',
                      icon: 'pi pi-user',
                      routerLink: 'profile',
                      command: (event: any) => this.closeCallback(event)
                    },
                    {
                      label: 'My Addresses',
                      icon: 'pi pi-map-marker'
                    },
                    {
                      label: 'My Orders',
                      icon: 'pi pi-id-card',
                      routerLink: 'allOrders',
                      command: (event: any) => this.closeCallback(event)
                    }
                  ];

                  
                  if (this.role == 'admin') {
                    this.items.push({
                      label: 'Dashboard',
                      icon: 'pi pi-cog',
                      command: () => this.navigateToDashboard()
                    });
                  }

                
                  this.items.push({
                    label: 'Log out',
                    icon: 'pi pi-sign-out',
                    command: () => this.logout()
                  });

                  
                  this.items = [
                    {
                      label: `${this.userName} ${this.lastName}`,
                      items: this.items
                    }
                  ];
    }
  
      
                  


    getUsersCartId():void{
      this.cartService.getLoggedUserCart().subscribe({
        next:(res:UserCart)=>{
          this.cartId=res.cart._id
        }
      })
    } 

    loadWishlist():void{
      this.store.dispatch(wishlistActions.loadWishlist())
      this.wishlistidsCount$= this.store.select(wishlistSelectors.selectWishlistIds)
    }
    loadCart():void{
      this.store.dispatch(CartActions.loadCart())
      this.cartidsCount$= this.store.select(CartSelectors.selectUserCartIds)
    }
   
    theme = this.dark.currentTheme;

    toggle(){
        this.dark.toggleTheme();
    } 


  
}
