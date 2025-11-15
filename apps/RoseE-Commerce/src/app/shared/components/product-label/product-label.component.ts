import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-label',
  imports: [CommonModule],
  templateUrl: './product-label.component.html',
  styleUrl: './product-label.component.scss',
})
export class ProductLabelComponent {
  @Input() text = '';
  @Input() textColor = 'text-gray-800';
  @Input() bgColor = '';
  @Input() borderColor = 'border-gray-200';
}
