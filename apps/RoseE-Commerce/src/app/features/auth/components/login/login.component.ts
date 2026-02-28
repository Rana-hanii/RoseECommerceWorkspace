import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { LineComponent } from '../../../../shared/components/line/line.component';
import { PASSWORD_PATTERN } from '../../../../shared/constants/regex.constants';
import { Subject, takeUntil } from 'rxjs';
import { HomeService } from '../../../home/services/home.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CustomButtonComponent,
    AuthTitleComponent,
    ReusableInputComponent,
    ReactiveFormsModule,
    LineComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly homeService = inject(HomeService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  private readonly toastr = inject(ToastrService);
  private readonly destroy$ = new Subject<void>();
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(PASSWORD_PATTERN)],
    ],
  });

  loginSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .SignIn(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            // save token
            this.cookieService.set('roseToken', res.token);

            // (,'') ====> behavior Subject
            this.homeService.isLogged.set(true);

            // successful login message
            this.toastr.success('Login successful!', 'Success');
            // navigate to home
            this.router.navigate(['main/home']);
          },
          error: (err) => {
            // Show error toast message
            this.toastr.error('Invalid email or password', 'Error');
          },
        });
    }
  }
}
