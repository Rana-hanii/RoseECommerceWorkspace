import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetButtonComponent } from "apps/RoseE-Commerce/src/app/shared/components/reset-button/reset-button.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-price-filter',
  imports: [CommonModule, ResetButtonComponent ,FormsModule, InputTextModule, FloatLabel],
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss',
})
export class PriceFilterComponent {


   value: string | undefined;
   value2: string | undefined;
}
