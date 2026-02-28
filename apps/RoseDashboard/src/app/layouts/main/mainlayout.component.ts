import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../side-bar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [CommonModule, SidebarComponent, RouterModule, RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss',
})
export class MainlayoutComponent {
  appPhoto = `/images/sidebar/footerlogo.webp`;
}
