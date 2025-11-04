import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { LineComponent } from '../../../../shared/components/line/line.component';
import { PASSWORD_PATTERN } from '../../../../shared/constants/regex.constants';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
    LineComponent,
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
      validators: this.confirmPassword,
    }
  );

  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }

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
