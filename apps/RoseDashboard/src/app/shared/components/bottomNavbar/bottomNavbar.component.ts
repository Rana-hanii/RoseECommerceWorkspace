import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../features/home/services/navigation.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bottom-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './bottomNavbar.component.html',
  styleUrl: './bottomNavbar.component.scss',
})
export class BottomNavbarComponent {

    private readonly navigationService=inject(NavigationService)
  
    isActive = this.navigationService.activeButton

     navigateToRose():void{
        window.location.href=environment.roseEcommerceApp
        
      }

}
