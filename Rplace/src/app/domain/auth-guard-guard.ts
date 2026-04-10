import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuardGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router)
  const token

  if (sessionStorage.getItem('token'))
    return router.navigate("login");
  return true;
};
