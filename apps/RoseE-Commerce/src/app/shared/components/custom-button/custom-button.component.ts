import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input({required:true})  pageType = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();
  onClick() {
    this.buttonClick.emit()
  }
}
