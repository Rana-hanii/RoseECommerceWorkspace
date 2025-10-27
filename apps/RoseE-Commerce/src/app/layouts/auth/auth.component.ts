import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthHeaderFooterComponent } from "../AuthHeaderFooter/AuthHeaderFooter.component";

@Component({
  selector: 'app-auth',
  imports: [CommonModule, RouterOutlet, AuthHeaderFooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}


