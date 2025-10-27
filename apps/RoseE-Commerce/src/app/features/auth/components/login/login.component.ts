import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { AuthTitleComponent } from '../../../../shared/components/auth-title/auth-title.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReusableInputComponent } from "../../../../shared/components/reusableInput/reusableInput.component";

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterLink,
    CustomButtonComponent,
    AuthTitleComponent,
      templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  ]

})
<<<<<<< HEAD
export class LoginComponent {}
=======
export class LoginComponent  {

  private readonly formBuilder=inject(FormBuilder)


   showPassword = false;


  loginForm:FormGroup=this.formBuilder.group({

    email:[null , [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    phone:[null , [Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    gender:[null,[Validators.required]]
  })



  submitForm():void{
    
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
    const formValue = this.loginForm.value;
    
    
    if (formValue.phone && typeof formValue.phone === 'object') {
      formValue.phone = formValue.phone.internationalNumber; 
    }
    
    console.log('Form Data:', formValue);


    }
  
    
  }
  

  togglePassword() {
    this.showPassword = !this.showPassword;
  }



}
>>>>>>> 27567cf60a00766c3298c6c7ffbbb050ad986de3
