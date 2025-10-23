import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { CustomButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/custom-button/custom-button.component";



@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, CustomButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent   {




}
