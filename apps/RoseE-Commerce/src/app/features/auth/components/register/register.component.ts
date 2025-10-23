import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/custom-button/custom-button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [CommonModule, CustomButtonComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
