import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';

@Component({
  selector: 'app-forgot-password',
  imports: [
    CommonModule,
    CustomButtonComponent,
    AuthTitleComponent,
    RouterLink,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    ReusableInputComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);

  forgetPassword: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });

  submitForgetPassword() {
    console.log(this.forgetPassword.value);
  }
}
