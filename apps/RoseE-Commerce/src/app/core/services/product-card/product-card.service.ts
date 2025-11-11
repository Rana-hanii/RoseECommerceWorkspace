import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  private readonly httpClient = inject(HttpClient);

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://flower.elevateegy.com/api/v1/products`
    );
  }
}
