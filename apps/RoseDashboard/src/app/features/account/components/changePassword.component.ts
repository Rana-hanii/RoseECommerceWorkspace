import { Component, DestroyRef, inject } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ErrorMsgComponent } from '../../../../../../RoseE-Commerce/src/app/shared/components/errorMsg/errorMsg.component';
@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    MessageModule,
    ErrorMsgComponent,
  ],
  templateUrl: './changePassword.component.html',
  styleUrl: './changePassword.component.scss',
})
export class ChangePasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly _accountService = inject(AccountService);
  private readonly _toster = inject(ToastrService);
  private readonly _destroy = inject(DestroyRef);
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
    const newPassword = control.get('newPassword');
    const confirmPas = control.get('confirmPassword');
    if (!confirmPas?.value) return null;

    if (newPassword?.value !== confirmPas?.value) {
      confirmPas.setErrors({ mismatch: true });
      confirmPas.markAsTouched();
      return { mismatch: true };
    } else {
      confirmPas.setErrors(null);
      return null;
    }
  }
  onSubmit() {
    if (this.changePassword.valid) {
      const payload = {
        password: this.changePassword.value.password,
        newPassword: this.changePassword.value.newPassword,
      };
      this._accountService
        .changePassword(payload)
        .pipe(takeUntilDestroyed(this._destroy))
        .subscribe({
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
