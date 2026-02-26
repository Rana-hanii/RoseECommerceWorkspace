import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AccountService } from '../services/account.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  templateUrl: './changePassword.component.html',
  styleUrl: './changePassword.component.scss',
})
export class ChangePasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly _accountService = inject(AccountService);
  private readonly _toster = inject(ToastrService);
  changePassword = this.fb.group(
    {
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [''],
    },
    {
      validators: this.passwordMatchValidator,
    }
  );
  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')?.value;
    const confirmPas = control.get('confirmPassword')?.value;

    return newPassword === confirmPas ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.changePassword.valid) {
      const payload = {
        password: this.changePassword.value.password,
        newPassword: this.changePassword.value.newPassword,
      };
      this._accountService.changePassword(payload).subscribe({
        next: (res) => {
          this._toster.success(
            'Your password has been changed successfully.',
            'Success'
          );
          console.log(res);
        },
      });
    } else {
      this.changePassword.markAllAsTouched();
    }
  }
}
