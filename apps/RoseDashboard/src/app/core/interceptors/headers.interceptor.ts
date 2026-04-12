import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const adminToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjkyNTdhYjM3ZmVlNjhhNGMyZjVkZDVjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzcwODk0MDk3fQ.l4rxAZlY2LuxbWksrRsElBc6-BDCKFGO5cwo7sUyPlo';
  const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjlkYmQ4MjU2YmJhZjE1ODhiYmJjNWU1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzYwMTU0MDN9.rtjp3Zn6vr4JCLUj-r1dhPzzrO4XwxbuQxryGpkTmP0';

  if (adminToken) {
    if (req.url.includes('statistics')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    } else {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
    }
  }

  return next(req);
};
