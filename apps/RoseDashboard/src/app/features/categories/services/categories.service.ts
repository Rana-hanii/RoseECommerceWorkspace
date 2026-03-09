import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { CategoriesRes } from '../interfaces/categories-res';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly apis=inject(ApiService)

  getAllCategories():Observable<CategoriesRes>{
   return this.apis.get<CategoriesRes>(`${ApiEndPointsDashboard.categories.categories}`)
  }
}
