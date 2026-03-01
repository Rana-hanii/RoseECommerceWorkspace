import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";
import { NavigationService } from '../../features/home/services/navigation.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink ,ButtonModule, Menu ,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{

  private readonly navigationService=inject(NavigationService)
  

  isActive = this.navigationService.activeButton
  items: any[]=[] 

  ngOnInit(): void {
      this.dropdownMenu()
  }

  navigateToRose():void{
    window.location.href=environment.roseEcommerceApp
    
  }

  dropdownMenu():void{
    this.items = [
            {
                label: 'Firstname + lastName',
                items: [
                    {
                        label: 'Account',
                        icon: 'pi pi-user',
                        routerLink:'account'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out'
                    }
                ]
            }
        ];
  }

}
