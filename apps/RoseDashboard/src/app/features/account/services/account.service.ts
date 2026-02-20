import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { Observable } from 'rxjs';
import { ApiEndPointsDashboard } from '../../../core/constants/api-EndPoints';
import { Contact } from '../interface/contact';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly _apiServices = inject(ApiService);

  PostConnect(): Observable<Contact> {
    return this._apiServices.post<Contact>(
      ApiEndPointsDashboard.account.connect,
      {}
    );
  }
}
