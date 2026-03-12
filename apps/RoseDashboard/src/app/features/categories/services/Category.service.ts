import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { AllCategories, Category } from '../interface/all-categories';
import { AddCategory } from '../interface/add-category';
import { GetCategory } from '../interface/get-category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly _apiUrl = inject(ApiService);

  getAllCategory(): Observable<AllCategories> {
    return this._apiUrl.get<AllCategories>(
      ApiEndPointsDashboard.categories.allCategories
    );
  }

  addCategory(data: any): Observable<AddCategory> {
    return this._apiUrl.post<AddCategory>(
      ApiEndPointsDashboard.categories.addCategories,
      data
    );
  }

  updateCategory(id: string | null, data: any): Observable<Category> {
    return this._apiUrl.put<Category>(
      ApiEndPointsDashboard.categories.updateCategory(id),
      data
    );
  }

  getCategory(id: string): Observable<GetCategory> {
    return this._apiUrl.get<GetCategory>(
      ApiEndPointsDashboard.categories.getCategory(id)
    );
  }

  deleteCategory(id: string): Observable<any> {
    return this._apiUrl.delete(
      ApiEndPointsDashboard.categories.DeleteCategory(id)
    );
  }
}
