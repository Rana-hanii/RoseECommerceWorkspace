import { ToastrService } from 'ngx-toastr';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { RouterLink } from '@angular/router';
import { AccountService } from './services/account.service';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    SelectModule,
    RouterLink,
  ],
  providers: [MessageService],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  private readonly fb = inject(FormBuilder);
  messageService = inject(MessageService);
  private readonly _account = inject(AccountService);
  private readonly _toaster = inject(ToastrService);
  user: any = {};
  userTel: any = {
    phone: '',
  };
  editForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    Password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '/^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,}$/'
        ),
      ],
    ],
    phone: [undefined, [Validators.required]],
    gender: [null, Validators.required],
  });
  onSubmit() {
    this._account.editProfile().subscribe({
      next: (res) => {
        console.log(res);
        this._toaster.success('success', 'Message In send');
      },
    });
  }
}
