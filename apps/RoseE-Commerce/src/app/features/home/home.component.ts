import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './components/bestSelling/bestSelling.component';
import { BenefitsSectionComponent } from './components/BenefitsSection/BenefitsSection.component';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { AboutSectionComponent } from "./components/about/about-section.component";
import { GallarySectionComponent } from "./components/gallary/gallary-section.component";
import { HomeService } from './services/home.service';
import { Testimonials, TestimonialsResponse } from '../../shared/interfaces/testimonials/testimonials-response';
import { map, Observable } from 'rxjs';
import { BestSeller, BestSellerData } from '../../shared/interfaces/bestSeller/best-seller';


@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutSectionComponent, BestSellingComponent, BenefitsSectionComponent,
     TestimonialsComponent, GallarySectionComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  private readonly homeService=inject(HomeService) 


   bestSellerProducts$!: Observable<BestSeller[]> 
   testimonials$!:Observable<Testimonials[]>


  ngOnInit(): void {
    this.getBestSellerProducts()
      this.getTestimonialsData()
  }



    // (,") == > Fetching Best Selling Data 
    getBestSellerProducts():void{
       this.bestSellerProducts$=this.homeService.getBestSeller().pipe(
        map((res:BestSellerData)=>res.bestSeller))
    }

    // (,") == > Fetching Testimonials Data 
    getTestimonialsData():void{
      this.testimonials$= this.homeService.getTestimonials().pipe(
        map((res:TestimonialsResponse)=>res.testimonials))
      
    }
  
}
