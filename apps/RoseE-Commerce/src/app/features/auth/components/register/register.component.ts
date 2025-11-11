
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { ReusableInputComponent } from '../../../../shared/components/reusableInput/reusableInput.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '@rose-ecommerce-workspace/auth';
import { LineComponent } from '../../../../shared/components/line/line.component';
import { PASSWORD_PATTERN } from '../../../../shared/constants/regex.constants';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { confirmPasswordValidator } from '../../../../shared/password_Validator/passwordValidator';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterLink,
    CustomButtonComponent,
    AuthTitleComponent,
    ReusableInputComponent,
    FormsModule,
    ReactiveFormsModule,
    LineComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private fb = inject(FormBuilder);

  registerFOrm: FormGroup = this.fb.group({
    firstName:[null,[Validators.minLength(10), Validators.maxLength(20), Validators.required]],
    lastName:[null,[Validators.minLength(10), Validators.maxLength(20), Validators.required]],
    email:[null,[Validators.email, Validators.required]],
    password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    phone:[null,[Validators.required,]],
    gender:[null,[Validators.required,]],
  })


  registerSubmit(){
    console.log(this.registerFOrm.value);
    
  }

}
