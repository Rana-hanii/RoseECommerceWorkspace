import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../../shared/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  private readonly httpClient = inject(HttpClient);

  getAllProduct(): Observable<Products> {
    return this.httpClient.get<Products>(
      `https://flower.elevateegy.com/api/v1/products`
    );
  }
}
