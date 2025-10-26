import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";
import { AuthTitleComponent } from "../../../../shared/components/auth-title/auth-title.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, CustomButtonComponent, AuthTitleComponent,RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
