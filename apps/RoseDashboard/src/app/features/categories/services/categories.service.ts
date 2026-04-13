import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { CategoriesRes } from '../interfaces/categories-res';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { GetCategory } from '../interfaces/get-category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly _apiService = inject(ApiService);

  getAllCategories(): Observable<CategoriesRes> {
    return this._apiService.get<CategoriesRes>(
      `${ApiEndPointsDashboard.categories.categories}`
    );
  }

  addCategory(data: any): Observable<any> {
    return this._apiService.post(
      ApiEndPointsDashboard.categories.categories,
      data
    );
  }

  getCategory(id: string): Observable<GetCategory> {
    return this._apiService.get<GetCategory>(
      ApiEndPointsDashboard.categories.get(id)
    );
  }

  updateCategory(id: string | null, data: FormData): Observable<any> {
    return this._apiService.put(
      ApiEndPointsDashboard.categories.update(id),
      data
    );
  }

  deleteCategory(id: string): Observable<any> {
    return this._apiService.delete(ApiEndPointsDashboard.categories.delete(id));
  }
}
