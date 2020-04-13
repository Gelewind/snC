import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CanActivate, CanLoad, CanActivateChild, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetdataService } from './getdata.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor( private router: Router, private gds: GetdataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.gds.isAuth()) {
      return true;
    }    else {
      return this.router.parseUrl('/login');
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.gds.isAdmin();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.gds.isAdmin();
  }
}
