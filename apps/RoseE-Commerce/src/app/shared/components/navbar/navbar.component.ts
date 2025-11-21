import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CookieService } from 'ngx-cookie-service';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, ButtonModule, InputTextModule, RouterLink, Menu],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private readonly cookieStore = inject(CookieService);
  user: any;
  isLoggedIn = false;
  items: MenuItem[] | undefined;
  getToken() {
    const token = this.cookieStore.get('roseToken');
    this.isLoggedIn = !!token;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const u = localStorage.getItem('user');
      if (u) this.user = JSON.parse(u);
    }
    this.getToken();
    this.items = [
      {
        label: this.user.firstName,
        items: [
          {
            label: 'Router Link',
            icon: 'pi pi-palette',
            routerLink: '/theming',
          },
          {
            label: 'Programmatic',
            icon: 'pi pi-link',
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//',

            command: () => this.logout(),
          },
        ],
      },
    ];
  }

  logout() {
    console.log('log');
  }
}
