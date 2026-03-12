import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((err) => {
      // Network error or CORS error
      if (!err.status) {
        toastr.error(err.error.message);
        console.error('Network or CORS error:', err);
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
          toastr.error('Bad Request: ' + serverMessage);
          break;
        case 401:
          toastr.error('Unauthorized: ' + serverMessage);
          break;
        case 403:
          toastr.error('Forbidden: ' + serverMessage);
          break;
        case 404:
          toastr.error('Not Found: ' + serverMessage);
          break;
        case 500:
          toastr.error('Server Error: ' + serverMessage);
          break;
        default:
          toastr.error(serverMessage);
          break;
      }

      console.error('HTTP Error:', err);
      return throwError(() => err);
    })
  );
};
