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
import { Router, RouterLink } from '@angular/router';
import { AccountService } from './services/account.service';
import { DialogModule } from 'primeng/dialog';
import { EditProfile } from './interface/edit-profile';

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
    DialogModule,
  ],
  providers: [MessageService],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  messageService = inject(MessageService);
  private readonly _accountService = inject(AccountService);
  private readonly _toaster = inject(ToastrService);
  private readonly _router = inject(Router);
  user: any = {};
  userTel: any = {
    phone: '',
  };
  visible = false;
  showDialog() {
    this.visible = true;
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    phone: [null as any, Validators.required],
  });

  updateEditProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const formValue = this.profileForm.value;

    const body = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phone: (formValue.phone as any)?.e164Number,
    };
    console.log(body);

    this._accountService.editProfile(body).subscribe({
      next: (res: EditProfile) => {
        this._toaster.success('Update', 'Profile Updated Successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProfileData(): void {
    this._accountService.ProfileData().subscribe({
      next: (res) => {
        this.profileForm.patchValue({
          firstName: res.user.firstName,
          lastName: res.user.lastName,
          email: res.user.email,
          phone: res.user.phone,
          gender: res.user.gender,
        });
      },
    });
  }

  deleteMyAccount() {
    this._accountService.deleteMyAccount().subscribe({
      next: (res) => {
        this._toaster.success('Delete', 'Deleted Is Successful');
      },
    });
  }
  ngOnInit(): void {
    this.getProfileData();
  }
}
