import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { BestSeller } from 'apps/RoseE-Commerce/src/app/shared/interfaces/bestSeller/best-seller';
import { Observable } from 'rxjs';
import { MainTitleComponent } from "../shared/main-title/main-title.component";

@Component({
  selector: 'app-best-selling',
  imports: [CommonModule, CustomButtonComponent, Carousel, Tag, ButtonModule, AsyncPipe, MainTitleComponent ,CurrencyPipe],
  templateUrl: './bestSelling.component.html',
  styleUrl: './bestSelling.component.scss',
})
export class BestSellingComponent implements OnInit {


  @Input()bestSellerProducts!: Observable<BestSeller[]> 

  responsiveOptions: any[] =[]
  
    ngOnInit(): void {
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
