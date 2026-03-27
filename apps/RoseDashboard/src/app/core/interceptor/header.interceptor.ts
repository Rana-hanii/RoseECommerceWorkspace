import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjk5Y2U2MjBlMzY0ZWY2MTQwNWIyZDc0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzQ2NDI5Njd9.w8NGHzrryAJ7-niZvTS9A6pMswCqeHVl7W9nMqVg2YA';
  const adminToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjkyNTdhYjM3ZmVlNjhhNGMyZjVkZDVjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzcwODk0MDk3fQ.l4rxAZlY2LuxbWksrRsElBc6-BDCKFGO5cwo7sUyPlo';

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return next(req);
};
