import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterLink,
    CustomButtonComponent,
    AuthTitleComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
