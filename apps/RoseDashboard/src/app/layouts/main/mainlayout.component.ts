import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../side-bar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { BottomNavbarComponent } from '../../shared/components/bottomNavbar/bottomNavbar.component';

@Component({
  selector: 'app-mainlayout',
  imports: [
    CommonModule,
    SidebarComponent,
    RouterModule,
    RouterOutlet,
    BreadcrumbComponent,
    NavbarComponent,
    BottomNavbarComponent,
  ],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss',
})
export class MainlayoutComponent {
  appPhoto = `/images/sidebar/footerlogo.webp`;
}
