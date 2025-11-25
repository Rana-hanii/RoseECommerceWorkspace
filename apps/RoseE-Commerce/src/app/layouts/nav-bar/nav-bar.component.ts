import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit{


  showMobileMenu= false;
  locationMessage= '';

  showUserMenu= false ;
  isLogin=false;
  userName=''
  lastName=''
 
  private readonly http=inject(HttpClient)
  private readonly authService=inject(AuthService)
  private readonly cookieService=inject(CookieService)
  private readonly plat_Id=inject(PLATFORM_ID)




  ngOnInit(): void {

    if (isPlatformBrowser(this.plat_Id)) {
        this.getUserLocation();
         this.userData()
          this.checkLoggedUser() 
    }

       
       
  } 

  checkLoggedUser():void{
      this.authService.isLogged$.subscribe(value => {this.isLogin=value})
  }

  userMenu(){
    this.showUserMenu = !this.showUserMenu
  }


   toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
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
    this.authService.isLogginSubject.next(false)
  } 


  userData():void{
    this.authService.getData().subscribe({
      next:(res)=>{
        this.userName=res.user.firstName
        this.lastName=res.user.lastName
      },error:(err)=>{
          console.log(err);
          
      }
    })
  }

  
}
