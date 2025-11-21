import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FlowerSpecial } from '../../model/flower-special';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-special-gifts-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule,NgOptimizedImage],
  templateUrl: './specialGiftsSlider.component.html',
  styleUrl: './specialGiftsSlider.component.scss',
})
export class SpecialGiftsSliderComponent {
  @ViewChild('slickModal', { static: true }) slickModal: any;
  SpecialGiftsSlider: FlowerSpecial[] = [
    {
      id: 0,
      images: 'slider1.png',
      title: 'Say It with Flowers',
      desc: 'Elegant gifts for every special moment.',
      buying: "I'm buying!",
    },
    {
      id: 1,
      images: 'slider2.png',
      title: 'Say It with Flowers',
      desc: 'Elegant gifts for every special moment.',
      buying: "I'm buying!",
    },
    {
      id: 1,
      images: 'slider3.png',
      title: 'Say It with Flowers',
      desc: 'Elegant gifts for every special moment.',
      buying: "I'm buying!",
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
