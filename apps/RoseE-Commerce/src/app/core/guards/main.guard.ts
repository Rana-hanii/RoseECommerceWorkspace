import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const mainGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const cookieService = inject(CookieService);
  if (isPlatformBrowser(platformId)) {
    const token = cookieService.get('roseToken');

    if (token) {
      router.navigate(['/main/home']);
      return false;
    } else {
      return true;
    }
  }

  return true;
};
