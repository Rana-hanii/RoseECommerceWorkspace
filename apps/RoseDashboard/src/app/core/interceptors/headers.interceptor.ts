import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjkyNTc1NjM3ZmVlNjhhNGMyZjVkY2Y5Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NjQ2NjU2MjF9.3MdvRKGrmYsqOQ0mL5T32Do6SBaHwkd8kpnuK1vJ98U'
  if (token) {
    req=req.clone(
      {setHeaders:{
         Authorization: `Bearer ${token}`
      }}
    )
    
  }

  return next(req);
};
