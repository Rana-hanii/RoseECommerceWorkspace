import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
  changePassword = this.fb.group({
    password: ['', [Validators.required]],
    newPassword: ['', [Validators.required]],
  });

  patchChangePassword() {
    this._accountService.changePassword(this.changePassword.value).subscribe({
      next: (res) => {
        this._toster.success('success', 'success Change Password');
        console.log(res);
      },
    });
  }

  onSubmit() {
    if (this.changePassword.valid) {
      this.patchChangePassword();
    } else {
      this.changePassword.markAllAsTouched();
    }
  }
}
