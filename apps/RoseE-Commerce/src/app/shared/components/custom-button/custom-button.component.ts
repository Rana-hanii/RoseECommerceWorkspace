import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input({required:true})  pageType = 'submit';
  @Input() buttonClick = new EventEmitter<void>()
  onClick() {
    this.buttonClick.emit()
  }
}
