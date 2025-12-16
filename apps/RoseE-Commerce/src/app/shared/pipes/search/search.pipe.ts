import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from '../../interfaces/products/products-res';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products:ProductData[] , letter:string):ProductData[] {
    
    return products.filter((char)=> char.title.toLowerCase().trim().includes(letter.toLowerCase()));
  }
}
