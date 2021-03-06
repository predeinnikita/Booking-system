import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Injectable()
export class IsAuthorizedGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.isAuthorized()
      .pipe(map(res => {
        if (!res) {
          this.router.navigate(['/entrance']);
        }
        return res;
      }));
  }
}
