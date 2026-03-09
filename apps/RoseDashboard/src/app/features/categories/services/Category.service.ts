import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { AllCategories } from '../interface/all-categories';

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

  addCategory(data: any): Observable<any> {
    return this._apiUrl.post(
      ApiEndPointsDashboard.categories.addCategories,
      data
    );
  }
}
