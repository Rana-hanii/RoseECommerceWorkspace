import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-special-gifts',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './specialGifts.component.html',
  styleUrl: './specialGifts.component.scss',
})
export class SpecialGiftsComponent {}
