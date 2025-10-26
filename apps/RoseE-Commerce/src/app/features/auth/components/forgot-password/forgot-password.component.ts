import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderFooterComponent } from "apps/RoseE-Commerce/src/app/layouts/AuthHeaderFooter/AuthHeaderFooter.component";

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, AuthHeaderFooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
