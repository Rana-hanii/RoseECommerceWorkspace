import { CookieService } from 'ngx-cookie-service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const _cookieService = inject(CookieService);
  _cookieService.get('roseToken');
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjk5Y2U2MjBlMzY0ZWY2MTQwNWIyZDc0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzIwNjMwNTl9.Wopsrz9PksF97l2E2s3lWl2eOV_1A5YXRQvZ1S9KUxE';

  const adminToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjkyNTdhYjM3ZmVlNjhhNGMyZjVkZDVjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzcwODk0MDk3fQ.l4rxAZlY2LuxbWksrRsElBc6-BDCKFGO5cwo7sUyPlo';
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return next(req);
};
