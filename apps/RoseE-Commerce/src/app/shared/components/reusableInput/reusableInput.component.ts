import { Component, Input, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {  NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ErrorMsgComponent } from "../errorMsg/errorMsg.component";


@Component({
  selector: 'app-reusable-input',
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, NgxIntlTelInputModule, ErrorMsgComponent],
  templateUrl: './reusableInput.component.html',
  styleUrl: './reusableInput.component.css',
  
})
export class ReusableInputComponent  {


  @Input() type:'text' | 'password' | 'email' | 'tel' | 'select' = 'text';
  @Input() option:string[]=[]
  @Input() label = ''
  @Input() placeholder = '' 




  showPassword= false
  value: string | number | undefined;

  constructor(@Self() public controlDir:NgControl){

    this.controlDir.valueAccessor =this;
  }




  writeValue(obj: any): void {
      this.value=obj
  }
  registerOnChange(fn: any): void {
      this.value=fn
  }

  registerOnTouched(fn: any): void {
      this.value=fn
  }

  get control():FormControl{
    return this.controlDir.control as FormControl
    
  }

  togglePasswordEye():void{
    this.showPassword=!this.showPassword
  }



}
