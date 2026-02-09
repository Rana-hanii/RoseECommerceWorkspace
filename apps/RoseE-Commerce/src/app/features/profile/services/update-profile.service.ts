import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { UserInfo } from '../interfaces/user-info';
import { UpdateProfileRes } from '../interfaces/update-profile-res';
import { map, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constants/api-endPoints';
import { UpdatePhotoRes } from '../interfaces/update-photo-res';
import { ChangePasswordReq } from '../interfaces/change-password-req';
import { ChangePasswordRes } from '../interfaces/change-password-res';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

    private readonly api_service=inject(ApiService)

  // (,'') Updating user Profile
    editProfile(data:UserInfo):Observable<UpdateProfileRes>{
      return this.api_service.put<UpdateProfileRes>(`${API_ENDPOINTS.auth.editProfile}` , data).pipe(
        map((res:UpdateProfileRes) => res)
      )
    } 

  // (,'') Updating user Photo
    changeUserPhoto(data:File):Observable<UpdatePhotoRes>{
        const userPhoto = new FormData();
         userPhoto.append('photo' , data)

        return this.api_service.put<UpdatePhotoRes>(API_ENDPOINTS.auth.uploadPhoto , userPhoto)
    }
  

  // (,'') Change Password
    changePassword(data:ChangePasswordReq):Observable<ChangePasswordRes>{
      return this.api_service.patch<ChangePasswordRes>(API_ENDPOINTS.auth.changePassword , data)
    }
    


}
