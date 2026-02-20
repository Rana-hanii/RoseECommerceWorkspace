import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, ButtonModule, Menu, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly _router = inject(Router);
  isActive: 'overview' | 'categories' | 'occasions' | 'products' = 'overview';
  items: any[] = [];

  ngOnInit(): void {
    this.dropdownMenu();
  }

  dropdownMenu(): void {
    this.items = [
      {
        label: 'Firstname + lastName',
        items: [
          {
            label: 'Account',
            icon: 'pi pi-refresh',
            command: () => {
              this._router.navigate(['/dash/account']);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }
}
