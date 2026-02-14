import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";
import { NavigationService } from '../../features/home/services/navigation.service';

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

  dropdownMenu():void{
    this.items = [
            {
                label: 'Firstname + lastName',
                items: [
                    {
                        label: 'Account',
                        icon: 'pi pi-user'
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
