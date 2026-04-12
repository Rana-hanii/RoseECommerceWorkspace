import { AuthService } from './../../../../../../../libs/src/lib/auth/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _router = inject(Router);

  return _authService.getData().pipe(
    map((res) => {
      if (res.user.role === 'admin') {
        return true;
      } else {
        _router.navigate(['/unauthorized']);
        return false;
      }
    }),
    catchError((err) => {
      _router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
