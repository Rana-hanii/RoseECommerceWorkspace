import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits-ui',
  imports: [CommonModule],
  templateUrl: './benefitsUI.component.html',
  styleUrl: './benefitsUI.component.scss',
})
export class BenefitsUIComponent {

  @Input() icon?:string
  @Input() title?:string
  @Input() description?:string
}
