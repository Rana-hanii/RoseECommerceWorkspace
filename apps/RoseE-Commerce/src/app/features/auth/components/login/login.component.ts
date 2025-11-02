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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);
  private readonly toastr = inject(ToastrService);
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ],
    ],
  });

  loginSubmit() {
    if (this.loginForm.valid) {
      this.authService.SignIn(this.loginForm.value).subscribe({
        next: (res) => {
          // save token
          this.cookieService.set('roseToken', res.token);
          // successful login message
          this.toastr.success('Login successful!', 'Success');
          // navigate to home
          this.router.navigate(['main/home']);
        },
        error: (err) => {
          console.error('Login failed', err);
          // Show error toast message
          this.toastr.error('Invalid email or password', 'Error');
        },
      });
    }
  }
}
