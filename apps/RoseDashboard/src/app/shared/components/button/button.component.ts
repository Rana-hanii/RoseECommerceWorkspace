import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  icon = input<string>('');
  buttonName = input<string>('');
  buttonRoute = input<string | any[]>('');
  type = input<'button' | 'submit'>('button');
  disabled = input<boolean>(false);
  className = input<string>('');
  btnClick = output<void>();
  variant = input<'primary' | 'cancel'>('primary');
}
