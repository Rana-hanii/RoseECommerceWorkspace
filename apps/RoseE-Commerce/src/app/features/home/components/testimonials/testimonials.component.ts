import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { SectionTitleComponent } from "apps/RoseE-Commerce/src/app/shared/components/sectionTitle/sectionTitle.component";
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { HomeService } from '../../services/home.service';
import { Testimonials, TestimonialsResponse } from 'apps/RoseE-Commerce/src/app/shared/interfaces/testimonials/testimonials-response';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, SectionTitleComponent, Rating, AsyncPipe, DatePipe, FormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {

  private readonly homeService=inject(HomeService)
  private readonly palt_id=inject(PLATFORM_ID)

  testimonials$!:Observable<Testimonials[]>

   ngOnInit(): void {
      if(isPlatformBrowser(this.palt_id)){
        this.getData()
      }
   }
 
  // Fetching Tetsimonials Data 
  getData():void{
    this.testimonials$= this.homeService.getTestimonials().pipe(
      map((res:TestimonialsResponse)=>res.testimonials))
    
  }

 


}
