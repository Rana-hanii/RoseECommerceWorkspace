import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../../shared/services/Error/error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const _errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((err) => {
      // Network error or CORS error
      if (!err.status) {
        console.error('Network or CORS error:', err);
        _errorService.showError();
        return throwError(() => err);
      }

      // Get the message from backend, either 'message' or 'error'
      const serverMessage =
        err.error?.message ||
        err.error?.error ||
        'An unknown server error occurred';

      // Display message based on status code
      switch (err.status) {
        case 400:
          _errorService.showError();
          break;
        case 401:
          _errorService.showError();
          break;
        case 403:
          _errorService.showError();
          break;
        case 404:
          _errorService.showError();
          break;
        case 500:
          _errorService.showError();
          break;
        default:
          _errorService.showError();
          break;
      }

      console.error('HTTP Error:', err);
      return throwError(() => err);
    })
  );
};
