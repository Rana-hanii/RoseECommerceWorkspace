import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../shared/components/custom-button/custom-button.component";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
