import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const adminToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjlkYmQ4MjU2YmJhZjE1ODhiYmJjNWU1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NzYwMTU0MDN9.rtjp3Zn6vr4JCLUj-r1dhPzzrO4XwxbuQxryGpkTmP0';

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return next(req);
};
