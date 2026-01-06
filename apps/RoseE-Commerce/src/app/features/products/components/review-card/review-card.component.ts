import { Component, input, InputSignal, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-card',
  imports: [CommonModule,DatePipe ,Rating , FormsModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent {

  userImg=input<string|null>(null)
  userName=input<string| null>(null)
  date=input<string |null> (null)
  rateAvg= input<number| null>(null)
  reviewTitle= input<string|null>(null)
  review=input<string|null>(null)


}
