import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseURL = environment.baseUrl;

  get<T>(endPoint: string) {
    return this.httpClient.get<T>(`${this.BaseURL}${endPoint}`);
  }

  post<T>(endPoint: string, data: unknown) {
    return this.httpClient.post<T>(`${this.BaseURL}${endPoint}`, data);
  }

  patch<T>(endPoint: string, data: unknown) {
    return this.httpClient.patch<T>(`${this.BaseURL}${endPoint}`, data);
  }

  put<T>(endPoint: string, data: unknown) {
    return this.httpClient.put<T>(`${this.BaseURL}${endPoint}`, data);
  }

  delete<T>(endPoint: string) {
    return this.httpClient.delete<T>(`${this.BaseURL}${endPoint}`);
  }
}
