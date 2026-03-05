import { inject, Injectable } from '@angular/core';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ProdRes } from '../interfaces/prod-res';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiService=inject(ApiService)


  getAllProducts():Observable<ProdRes>{
    return this.apiService.get<ProdRes>(`${ApiEndPointsDashboard.products.products}`)
  }

}
