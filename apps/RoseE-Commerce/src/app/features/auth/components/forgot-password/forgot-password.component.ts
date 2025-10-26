import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderFooterComponent } from "../../../../layouts/AuthHeaderFooter/AuthHeaderFooter.component";
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, AuthHeaderFooterComponent, CustomButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
