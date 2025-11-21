import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Items } from '../../model/items';

@Component({
  selector: 'app-special-gifts-items',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './SpecialGiftsItems.component.html',
  styleUrl: './SpecialGiftsItems.component.scss',
})
export class SpecialGiftsItemsComponent {
  items: Items[] = [
    {
      id: 0,
      title: 'Celebrate Her Forever with a Gift She’ll Always Remember',
      images: 'Celebrate.png',
      desc: 'Wedding',
    },
    {
      id: 0,
      title: 'Honor the Beginning of a Beautiful Journey Together',
      images: 'Honor.png',
      desc: 'Engagement',
    },
    {
      id: 0,
      title: 'Mark Every Year of Love with a Meaningful Surprise',
      images: 'Meaningful.png',
      desc: 'Anniversary',
    },
  ];
}
