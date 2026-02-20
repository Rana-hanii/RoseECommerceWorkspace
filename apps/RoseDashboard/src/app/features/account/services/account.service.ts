import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { EditProfile } from '../interface/edit-profile';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly _apiServices = inject(ApiService);

  editProfile(): Observable<EditProfile> {
    return this._apiServices.put<EditProfile>(
      ApiEndPointsDashboard.account.editProfile,
      {}
    );
  }
}
