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
@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './changePassword.component.html',
  styleUrl: './changePassword.component.scss',
})
export class ChangePasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly _accountService = inject(AccountService);
  private readonly _toster = inject(ToastrService);
  changePassword = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  patchChangePassword() {
    this._accountService.changePassword(this.changePassword.value).subscribe({
      next: (res) => {
        this._toster.success('success', 'success');
      },
    });
  }

  onSubmit() {
    if (this.changePassword.valid) {
      console.log(this.changePassword);
      this.patchChangePassword();
    }
  }

  ngOnInit(): void {
    this.patchChangePassword();
  }
}
