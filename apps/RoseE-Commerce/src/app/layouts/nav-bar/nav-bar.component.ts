import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit{


  showProfileMenu: boolean = false;
  locationMessage: string = '';
 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserLocation();
  }


   toggleProfile() {
    this.showProfileMenu = !this.showProfileMenu;
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
}
