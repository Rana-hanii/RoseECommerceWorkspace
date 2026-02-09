import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../../features/home/home.component";

@Component({
  selector: 'app-mainlayout',
  imports: [CommonModule, HomeComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss',
})
export class MainlayoutComponent {}
