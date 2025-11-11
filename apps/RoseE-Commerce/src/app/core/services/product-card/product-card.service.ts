import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  private readonly httpClient = inject(HttpClient);

  getAllProduct(): Observable<any> {
    return this.httpClient.get(`https://flower.elevateegy.com/api/v1/home`);
  }
}
