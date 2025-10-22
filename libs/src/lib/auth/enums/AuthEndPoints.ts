import { inject } from "@angular/core";
import { API_URL } from "../tokens/tokens";

export class AuthEndPoint {
private  static readonly API_URL = inject (API_URL)
  //* REGISTER AND LOGIN
  static SIGNIN = `${this.API_URL}/auth/signin`;
  static SIGNUP = `${this.API_URL}/auth/signup`;
  static LOGOUT = `${this.API_URL}/auth/logout`;
  //* FORGET PASSWORD
  static FORGETPASSWORD = `${this.API_URL}/auth/forgotPassword`;
  static VERIFY = `${this.API_URL}/auth/verifyResetCode`;
  static RESETPASSWORD = `${this.API_URL}/auth/resetPassword`;
}
