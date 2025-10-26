import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input({required:true})  pageType: 'Login' | 'Create Account' | 'Continue' = 'Login';
  @Input() disable = false;
  @Input() clicked = new EventEmitter<void>();

  // get buttonText(): string {
  //   switch (this.pageType) {
  //     case 'Login':
  //       return 'Login';
  //     case 'register':
  //       return 'Create Account';
  //     case 'forgetPassword':
  //       return 'Continue';
  //     default:
  //       return 'Submit';
  //   }
  // }

  onClick() {
    this.clicked.emit();
  }
}
