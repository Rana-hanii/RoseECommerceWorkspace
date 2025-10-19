import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ToastrService } from 'ngx-toastr';

import { ButtonModule } from 'primeng/button';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  imports: [NxWelcomeComponent, RouterModule, ButtonModule, NgxSpinnerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'RoseE-Commerce'; 


  private readonly toastr=inject(ToastrService)
  private readonly ngxSpinner=inject(NgxSpinnerService)

  ngOnInit(): void {
     this.showSpinner()
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
