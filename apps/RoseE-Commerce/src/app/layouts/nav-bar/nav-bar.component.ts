import { Component, inject, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
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
import { ProductsService } from '../../features/products/services/products.service';



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
  items:any[]=[]
  textSearch=signal<string>('')
 
  private readonly http=inject(HttpClient)
  private readonly authService=inject(AuthService)
  private readonly homeService=inject(HomeService)
  private readonly productsService=inject(ProductsService)
  private readonly cookieService=inject(CookieService)
  private readonly plat_Id=inject(PLATFORM_ID)


  ngOnInit(): void {

    if (isPlatformBrowser(this.plat_Id)) {
      this.checkLoggedUser() 
        this.getUserLocation();
         this.userData()
         
    }
  } 

  checkLoggedUser():void{
      this.isLogin = this.homeService.isLogged
  }

  userMenu(){
    this.showUserMenu = !this.showUserMenu
  }


  search():void{
     this.productsService.setSearchText(this.textSearch());
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

    visible= false;


    userItems():void{
       this.items = [
            {
                label: `${this.userName} ${ this.lastName} `,
                
                items: [
                    {
                        label: 'My Profile',
                        icon: 'pi pi-user',
                        
                    },
                    {
                        label: 'My Addresses',
                        icon: 'pi pi-map-marker'
                    } ,
                    {
                        label: 'My Orders',
                        icon: 'pi pi-id-card'
                    } ,
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-cog'
                    } ,
                    {
                        label: 'Log out',
                        icon: 'pi pi-sign-out',
                        command: ()=>this.logout()
                    } ,
                ]
            }
        ];
    }

  
}
