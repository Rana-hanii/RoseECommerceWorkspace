import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-best-selling',
  imports: [CommonModule, CustomButtonComponent, CarouselModule, ButtonModule],
  templateUrl: './bestSelling.component.html',
  styleUrl: './bestSelling.component.scss',
})
export class BestSellingComponent implements OnInit {
  
  products: any[]= []
  responsiveOptions: any[] =[]
  
  ngOnInit() {
        


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

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'INSTOCK':
    //             return 'success';
    //         case 'LOWSTOCK':
    //             return 'warn';
    //         case 'OUTOFSTOCK':
    //             return 'danger';
    //     }
    // }

}
