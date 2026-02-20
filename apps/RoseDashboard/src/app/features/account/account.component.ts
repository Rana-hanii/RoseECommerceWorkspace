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
import { RouterLink, RouterOutlet } from '@angular/router';
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
export class AccountComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  messageService = inject(MessageService);

  user: any = {};
  userTel: any = {
    phone: '',
  };
  cities: any;

  formAccount = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
  });

  onSubmit(formAccount: any) {
    console.log(formAccount.value);
  }

  ngOnInit(): void {
    this.cities = [{ name: 'Male' }, { name: 'femail' }];
  }
}
