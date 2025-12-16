import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from '../../interfaces/products/products-res';

@Pipe({
  name: 'sortPrice',
})
export class SortPricePipe implements PipeTransform {
  transform( products:ProductData[] | null | undefined , sort:'lowHigh'):ProductData[] {
       if (!products) return [];
    return [...products].sort((a, b) => {
      return sort === 'lowHigh' ? a.priceAfterDiscount - b.priceAfterDiscount 
                             : b.priceAfterDiscount - a.priceAfterDiscount;
    });
  }
}
