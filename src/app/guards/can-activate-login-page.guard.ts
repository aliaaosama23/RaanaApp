import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginPageGuard implements CanActivate {
  constructor(private _angularFireAuth: AngularFireAuth, private route: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._angularFireAuth.authState.pipe(
      map((auth): any => {
        if (auth) {
          this.route.navigate(['/tabs']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

}
