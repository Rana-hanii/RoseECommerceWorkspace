import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-button',
  imports: [CommonModule],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.scss',
})
export class ResetButtonComponent {

    buttonName:InputSignal<string>= input('');
}
