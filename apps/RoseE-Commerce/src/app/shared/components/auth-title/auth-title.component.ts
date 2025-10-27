import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-title',
  imports: [CommonModule],
  templateUrl: './auth-title.component.html',
  styleUrl: './auth-title.component.scss',
})
export class AuthTitleComponent {
  @Input() text = '';
}
