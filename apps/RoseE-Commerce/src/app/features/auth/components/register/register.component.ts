import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";
import { AuthTitleComponent } from "../../../../shared/components/auth-title/auth-title.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, CustomButtonComponent, AuthTitleComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
