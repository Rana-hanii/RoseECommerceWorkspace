import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../side-bar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { BottomNavbarComponent } from '../../shared/components/bottomNavbar/bottomNavbar.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-mainlayout',
  imports: [
    CommonModule,
    SidebarComponent,
    RouterModule,
    RouterOutlet,
    NavbarComponent,
    BottomNavbarComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss',
})
export class MainlayoutComponent {
  appPhoto = `/images/sidebar/footerlogo.webp`;
}
