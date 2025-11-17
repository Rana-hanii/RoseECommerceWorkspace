import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { HomeService } from '../../services/home.service';
import { BestSeller, BestSellerData } from 'apps/RoseE-Commerce/src/app/shared/interfaces/bestSeller/best-seller';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-best-selling',
  imports: [CommonModule, CustomButtonComponent, Carousel , Tag, ButtonModule ,AsyncPipe],
  templateUrl: './bestSelling.component.html',
  styleUrl: './bestSelling.component.scss',
})
export class BestSellingComponent implements OnInit {

    private readonly homeService=inject(HomeService)
  
  bestSellerProducts$: Observable<BestSeller[]> = of([]);

  responsiveOptions: any[] =[]
  
    ngOnInit(): void {
        
        this.getBestSellerProducts()
        this.responsive()
    } 


    responsive():void{
           this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    getBestSellerProducts():void{
        this.homeService.getBestSeller().subscribe({
            next:(res:BestSellerData)=>{
                console.log(res.bestSeller);
                this.bestSellerProducts$=of(res.bestSeller ?? [])
                
            },error:(err)=>{
                console.log(err);
                
            }
        })
    }

    getSeverity(status: string):any {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }

}
