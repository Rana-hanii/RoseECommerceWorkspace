import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
