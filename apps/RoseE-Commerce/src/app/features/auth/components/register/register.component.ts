
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { ToastrService } from 'ngx-toastr';


import { Subject, takeUntil } from 'rxjs';
import { PASSWORD_PATTERN } from 'apps/RoseE-Commerce/src/app/shared/constants/regex.constants';
import { confirmPasswordValidator } from 'apps/RoseE-Commerce/src/app/shared/password_Validator/passwordValidator';
import { LineComponent } from "apps/RoseE-Commerce/src/app/shared/components/line/line.component";

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterLink,
    CustomButtonComponent,
    AuthTitleComponent,
    ReusableInputComponent,
    FormsModule,
    ReactiveFormsModule,
    LineComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly toastr = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();
  registerFOrm: FormGroup = this.fb.group(
    {
      firstName: [
        null,
        [
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      lastName: [
        null,
        [
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      email: [null, [Validators.email, Validators.required]],
      password: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      rePassword: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      phone: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  registerSubmit() {
    if (this.registerFOrm.valid) {
      const formData = { ...this.registerFOrm.value };

      if (formData.phone && typeof formData.phone == 'object') {
        formData.phone = formData.phone.internationalNumber;
      }
      this.authService
        .SignUp(formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.toastr.success(
              res.message || 'Registration | succssusfly',
              'success'
            );
          },
        });
    }
  }
}
