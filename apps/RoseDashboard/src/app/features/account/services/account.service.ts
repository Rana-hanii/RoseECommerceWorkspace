import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { EditProfile } from '../interface/edit-profile';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly _apiServices = inject(ApiService);
  private userProfileSubject = new BehaviorSubject<EditProfile | null>(null);
  userProfile$ = this.userProfileSubject.asObservable();
  editProfile(): Observable<EditProfile> {
    return this._apiServices
      .put<EditProfile>(ApiEndPointsDashboard.account.editProfile, {})
      .pipe(
        tap((response: EditProfile) => this.userProfileSubject.next(response))
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

  getCurrentValue() {
    return this.userProfileSubject.value;
  }
}
