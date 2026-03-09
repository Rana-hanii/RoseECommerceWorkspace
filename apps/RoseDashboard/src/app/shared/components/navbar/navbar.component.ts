import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports: [CommonModule, BreadcrumbComponent ,ButtonModule, Menu ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {

  logoImg=input<string>('')
  userImg=input<string>('')

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
                        icon: 'pi pi-user',
                        routerLink:'account',
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
