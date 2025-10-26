import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AuthHeaderFooterComponent } from "../../../../layouts/AuthHeaderFooter/AuthHeaderFooter.component";
import { CustomButtonComponent } from "../../../../shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterLink, AuthHeaderFooterComponent, CustomButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
