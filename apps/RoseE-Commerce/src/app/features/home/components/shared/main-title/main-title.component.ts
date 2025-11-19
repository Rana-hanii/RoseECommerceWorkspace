import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-title',
  imports: [CommonModule],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss',
})
export class MainTitleComponent {
  @Input() subtitle!: string;
}
