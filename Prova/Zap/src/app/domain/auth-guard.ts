import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const AuthGuard:CanMatchFn = (route, segments) => {
  const router = inject( Router )

  const token = sessionStorage.getItem('token') ?? "";
  const logged = "" !== token;

  if(route.path == "") {
    if(logged){
      return router.createUrlTree([""]);
    }else {
      return true;
    }
  }

  if(logged) {
    return true;
  }
  return router.createUrlTree([""]);
};
