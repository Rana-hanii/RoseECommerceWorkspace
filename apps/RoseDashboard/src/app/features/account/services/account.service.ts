import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { ProfileData } from '../interface/profile-data';
import { EditProfile } from '../interface/edit-profile';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly _apiServices = inject(ApiService);
  ProfileData(): Observable<ProfileData> {
    return this._apiServices.get<ProfileData>(
      ApiEndPointsDashboard.account.ProfileData
    );
  }

  deleteMyAccount(): Observable<any> {
    return this._apiServices.delete(
      ApiEndPointsDashboard.account.deleteMyAccount
    );
  }
  changePassword(data: any): Observable<any> {
    return this._apiServices.patch(
      ApiEndPointsDashboard.account.changePassword,
      data
    );
  }

  logOut(): Observable<any> {
    return this._apiServices.get(ApiEndPointsDashboard.account.logOut);
  }

  editProfile(data: any): Observable<EditProfile> {
    return this._apiServices.put<EditProfile>(
      ApiEndPointsDashboard.account.editProfile,
      data
    );
  }
}
