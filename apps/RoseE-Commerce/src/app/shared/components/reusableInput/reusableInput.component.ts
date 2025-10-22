import { Component, Input, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import {  NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-reusable-input',
  imports: [CommonModule, InputTextModule ,Message, FormsModule, ReactiveFormsModule , NgxIntlTelInputModule],
  templateUrl: './reusableInput.component.html',
  styleUrl: './reusableInput.component.css',
  
})
export class ReusableInputComponent  {


  @Input() type:'text' | 'password' | 'email' | 'tel' | 'select' = 'text';
  @Input() option:string[]=[]
  @Input() label:string = ''
  @Input() placeholder:string = '' 




  showPassword:boolean = false
  value: string | number | undefined;

  constructor(@Self() public controlDir:NgControl){

    this.controlDir.valueAccessor =this;
  }




  writeValue(obj: any): void {
      
  }
  registerOnChange(fn: any): void {
      
  }

  registerOnTouched(fn: any): void {
      
  }

  get control():FormControl{
    return this.controlDir.control as FormControl
    
  }

  togglePasswordEye():void{
    this.showPassword=!this.showPassword
  }



}
