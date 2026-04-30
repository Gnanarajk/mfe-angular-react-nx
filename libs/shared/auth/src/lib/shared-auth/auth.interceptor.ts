import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import AuthStore from './shared-auth';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthStore);
  const accessToken = auth.accessToken();

  const authReq = accessToken
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Optionally, you can implement token refresh logic here
        console.warn('Unauthorized request - consider refreshing token');
      }
      throw error;
    })
  );
};
