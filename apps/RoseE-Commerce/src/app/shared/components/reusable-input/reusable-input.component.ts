import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl,  FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reusable-input',
  imports: [CommonModule ,InputTextModule ,FormsModule,ReactiveFormsModule],
  templateUrl: './reusable-input.component.html',
  styleUrl: './reusable-input.component.css',
  standalone: true,
})
export class ReusableInputComponent implements ControlValueAccessor , OnInit {

  
  private readonly controlDir=inject(NgControl , { optional: true, self: true })

  @Input() type: 'text' | 'password' | 'email' | 'phone' | 'select' = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() customClass = '';
  @Input() formControl?: FormControl;


   value: string | undefined;


  onChange: any = () => { };
  onTouched: any = () => { };


  
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
      if (this.controlDir) {
          this.controlDir.valueAccessor = this;
          }

  } 

  get invalid() {
    return this.formControl?.touched && this.formControl?.invalid;
  }

    get controlField(): FormControl {
    return (this.controlDir?.control as FormControl) ?? this.formControl ?? null;
  }

  get erroMessage():string{
    if(this.formControl?.errors?.['required']){

      return `${this.label} is required`
    }
    
    if(this.formControl?.errors?.['email']){

        return `Please enter a valid email address`;
    }
    if(this.formControl?.errors?.['minlength']){

      return `${this.label} must be at least 8 chars`
    }

    return ''
  }


  
}



