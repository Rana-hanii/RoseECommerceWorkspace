import { inject, Injectable } from '@angular/core';
import { AdressReq } from '../../interfaces/adress-req';
import { map, Observable } from 'rxjs';
import { ApiService } from 'apps/RoseE-Commerce/src/app/core/services/api.service';
import { AdressRes } from '../../interfaces/adress-res';
import { environment } from 'apps/RoseE-Commerce/src/app/environments/environment';
import { API_ENDPOINTS } from 'apps/RoseE-Commerce/src/app/core/constants/api-endPoints';

@Injectable({
  providedIn: 'root'
})
export class UserAdressesService {

  private readonly apiService=inject(ApiService)

  updateAdress(id:string , data:AdressReq ):Observable<AdressRes>{
    return this.apiService.patch<AdressRes>(`${API_ENDPOINTS.adress.updateAdress}/${id}` , data )

  } 

  addAdress(data:AdressReq):Observable<AdressRes>{
    return this.apiService.patch<AdressRes>(`${API_ENDPOINTS.adress.addAdress}`, data)
    
  } 

  removeAdress(id:string):Observable<AdressRes>{
    return this.apiService.delete<AdressRes>(`${API_ENDPOINTS.adress.removeAdress}/${id}`)

  }

  getLoggedUserAdresses():Observable<AdressRes>{
    return this.apiService.get<AdressRes>(API_ENDPOINTS.adress.getAdress)
  }

  
  

}
