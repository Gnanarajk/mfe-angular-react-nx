import { inject } from '@angular/core';
import AuthStore from './shared-auth';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  } else {
    auth.logout();
    router.navigate(['/login']);
    return false;
  }
};
