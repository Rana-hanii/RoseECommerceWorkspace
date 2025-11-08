import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';
import {
  AuthService,
  IForgetPasswordReq,
} from '@rose-ecommerce-workspace/auth';
import { ToastrService } from 'ngx-toastr';
import { InputOtpModule } from 'primeng/inputotp';
import { CookieService } from 'ngx-cookie-service';
import { LineComponent } from '../../../../shared/components/line/line.component';
import { PASSWORD_PATTERN } from '../../../../shared/constants/regex.constants';
import { Subject, takeUntil } from 'rxjs';
import { confirmPasswordValidator } from '../../../../shared/password_Validator/passwordValidator';
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
    InputOtpModule,
    FormsModule,
    LineComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly toastr = inject(ToastrService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  private readonly destroy$ = new Subject<void>();
  step = 1;
  emailValue = '';
  resendDisabled = true;
  countDown = 60;
  intervalId: any;
  forgetPassword: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });

  otpForm: FormGroup = this.fb.group({
    otp: [null, [Validators.required, Validators.minLength(6)]],
  });

  resetPasswordForm: FormGroup = this.fb.group(
    {
      newPassword: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
      ],
      confirmPassword: [null, [Validators.required]],
    },
    {
      validators: confirmPasswordValidator,
    }
  );

  startTimer() {
    clearInterval(this.intervalId);
    this.resendDisabled = true;
    this.countDown = 60;
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown <= 0) {
        clearInterval(this.intervalId);
        this.resendDisabled = false;
      }
    }, 1000);
  }
  submitForgetPassword() {
    if (this.forgetPassword.valid) {
      this.authService
        .ForgetPassword(this.forgetPassword.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.emailValue = this.forgetPassword.get('email')?.value;
            this.step = 2;
            // display message Success
            this.toastr.success(
              res.message || 'OTP sent to your email',
              'Success'
            );
          },
          error: (err) => {
            // display error message
            this.toastr.error(
              err.error?.message || 'Failed to send reset code',
              'Error'
            );
          },
        });
    }
  }
  resendOtp() {
    const email = this.forgetPassword.get('email')?.value;
    if (!email) {
      this.toastr.error(
        'Email not found. Please go back and enter your email again.',
        'Error'
      );
      return;
    }
    const model: IForgetPasswordReq = { email };
    this.authService
      .ForgetPassword(model)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.toastr.success(
            res.message || 'A new OTP has been sent to your email',
            'Success'
          );
          this.startTimer();
        },
        error: (err) => {
          this.toastr.error(
            err.error?.message || 'failed to resend OTP',
            'Error'
          );
        },
      });
  }

  submitVerifyCode() {
    if (this.otpForm.valid) {
      const model = {
        resetCode: this.otpForm.get('otp')?.value.trim(),
      };
      this.authService
        .VerifyCode(model)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.toastr.success('OTP verified successfully', 'Success');
            this.step = 3;
          },
          error: (err) => {
            this.toastr.error(
              err.error?.message || 'Invalid or expired OTP',
              'Error'
            );
          },
        });
    }
  }

  submitResetPassword() {
    if (this.resetPasswordForm.valid) {
      const model = {
        email: this.emailValue,
        newPassword: this.resetPasswordForm.get('newPassword')?.value,
      };
      this.authService
        .ResetPassword(model)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            // display message
            this.toastr.success(
              'Your password has been reset successfully',
              'Success'
            );
            // navigation to login
            this.router.navigate(['/auth/login']);
          },
          error: (err) => {
            this.toastr.error(
              err.error?.message || 'Something went wrong',
              'Error'
            );
          },
        });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
