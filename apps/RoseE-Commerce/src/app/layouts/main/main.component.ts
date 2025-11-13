import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
