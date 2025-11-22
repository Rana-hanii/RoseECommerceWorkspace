import { Component,Input } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { Testimonials} from 'apps/RoseE-Commerce/src/app/shared/interfaces/testimonials/testimonials-response';
import { Observable } from 'rxjs';
import { MainTitleComponent } from "../shared/main-title/main-title.component";

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, SectionTitleComponent, Rating, AsyncPipe, DatePipe, FormsModule, MainTitleComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {

 @Input()testimonials!:Observable<Testimonials[]>

}
