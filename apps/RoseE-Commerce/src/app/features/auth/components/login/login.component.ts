import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AuthHeaderFooterComponent } from '../../../../layouts/AuthHeaderFooter/AuthHeaderFooter.component';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';



@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, AuthHeaderFooterComponent, CustomButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent   {




}
