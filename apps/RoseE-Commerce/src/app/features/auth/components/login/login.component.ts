import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";
import { ButtonModule } from "primeng/button";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [CommonModule, NgxSpinnerComponent, ButtonModule,
            ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {



  private readonly toastr=inject(ToastrService)
  private readonly ngxSpinner=inject(NgxSpinnerService)
  private readonly formBuilder=inject(FormBuilder)


  loginform:FormGroup=this.formBuilder.group({
       email:['' , [Validators.required , Validators.email]],
       password:['' , [Validators.required , Validators.minLength(8)]],
       phone:['' , [Validators.required , ]],
  })


    ngOnInit(): void {
     this.showSpinner()
  }

    submitForm():void{
   
      console.log("login Form Success " , 'Login Button');
      console.log(this.loginform.value);
      
      
   
  }




  showSpinner():void{
    this.ngxSpinner.show() 

    setTimeout(() => {
      this.ngxSpinner.hide()
    }, 3000);
  }
   showSuccess():void{
    this.toastr.success('hello World' , 'Have Ablast' ,{timeOut:4000} ) 
  }




}
