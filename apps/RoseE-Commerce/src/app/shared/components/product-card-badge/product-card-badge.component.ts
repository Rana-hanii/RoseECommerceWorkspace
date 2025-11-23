import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card-badge',
  imports: [CommonModule],
  templateUrl: './product-card-badge.component.html',
  styleUrl: './product-card-badge.component.scss',
})
export class ProductCardBadgeComponent {

  @Input() type!:string;

}
