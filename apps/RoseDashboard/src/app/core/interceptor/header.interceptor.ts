import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1zc2VyIjoiNjkyNTdhYjM3ZmVlNjhhNGMyZjVkZDVjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzcwODk0MDk3fQ.l4rxAZlY2LuxbWksrRsElBc6-BDCKFGO5cwo7sUyPlo';
  const adminToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjkwM2E2NDE3ZmVlNjhhNGMyZjE0NGUxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzA5NzI4ODJ9.f81GbJkHvOEI70-pOaVtP6fG3AhqzSnC7OotugEOhic';

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return next(req);
};
