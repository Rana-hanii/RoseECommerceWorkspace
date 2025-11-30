import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthAPIResService } from './adapter/authAPIRes.adapter';
import { authAPI } from './base/authAPI';
import { AuthEndPoint } from './enums/AuthEndPoints';
import { AdaptedSignInRes } from './interfaces/adapter/AdaptedSignInRes';
import { AdaptedSignUpRes } from './interfaces/adapter/AdaptedSignUpRes';
import { IForgetPasswordReq } from './interfaces/forget-password/IForgetReq';
import { IForgetPasswordRes } from './interfaces/forget-password/IForgetRes';
import { ILogOutRes } from './interfaces/log-out/ILogOutRes';
import { IResetReq } from './interfaces/reset-password/IResetReq';
import { IResetRes } from './interfaces/reset-password/IResetRes';
import { ISignInReq } from './interfaces/sign-in/ISignInReq';
import { ISignInRes } from './interfaces/sign-in/ISignInRes';
import { ISignUpReq } from './interfaces/sign-up/ISignUpReq';
import { ISignUpRes } from './interfaces/sign-up/ISignUpRes';
import { IVerifyReq } from './interfaces/verify-code/IVerifyReq';
import { IVerifyRes } from './interfaces/verify-code/IVerifyRes';
import { API_URL } from './tokens/tokens';
import { UserDataRes } from './interfaces/user-data/user-data-RES';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements authAPI {
  _httpClient = inject(HttpClient);
  _adaptorService = inject(AuthAPIResService);
  private readonly Base_API_URL = inject(API_URL);

  

  SignUp(data: ISignUpReq): Observable<AdaptedSignUpRes> {
    return this._httpClient
      .post<ISignUpRes>(this.Base_API_URL + AuthEndPoint.SIGNUP, data)
      .pipe(
        map((res: ISignUpRes) => this._adaptorService.adaptSignUp(res)),
        catchError((err) => throwError(() => err))
      );
  }

  SignIn(data: ISignInReq): Observable<AdaptedSignInRes> {
    return this._httpClient
      .post<ISignInRes>(this.Base_API_URL + AuthEndPoint.SIGNIN, data)
      .pipe(
        map((res: ISignInRes) => this._adaptorService.adaptSignIn(res)),
        catchError((err) => throwError(() => err))
      );
  }

  LogOut(): Observable<ILogOutRes> {
    return this._httpClient
      .get<ILogOutRes>(this.Base_API_URL + AuthEndPoint.LOGOUT, {})
      .pipe(
        map((res: ILogOutRes) => res),
        catchError((err) => throwError(() => err))
      );
  }

  ForgetPassword(data: IForgetPasswordReq): Observable<IForgetPasswordRes> {
    return this._httpClient
      .post<IForgetPasswordRes>(
        this.Base_API_URL + AuthEndPoint.FORGETPASSWORD,
        data
      )
      .pipe(
        map((res: IForgetPasswordRes) => res),
        catchError((err) => throwError(() => err))
      );
  }

  VerifyCode(data: IVerifyReq): Observable<IVerifyRes> {
    return this._httpClient
      .post<IVerifyRes>(this.Base_API_URL + AuthEndPoint.VERIFY, data)
      .pipe(
        map((res: IVerifyRes) => res),
        catchError((err) => throwError(() => err))
      );
  }

  ResetPassword(data: IResetReq): Observable<IResetRes> {
    return this._httpClient
      .put<IResetRes>(this.Base_API_URL + AuthEndPoint.RESETPASSWORD, data)
      .pipe(
        map((res: IResetRes) => res),
        catchError((err) => throwError(() => err))
      );
  }


  getData():Observable<UserDataRes>{
    return this._httpClient.get<UserDataRes>(this.Base_API_URL +AuthEndPoint.USERDATA).pipe(
      map((res:UserDataRes)=> res),
      catchError((err)=>throwError(()=>err))
    )
  }
}
