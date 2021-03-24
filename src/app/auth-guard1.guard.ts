import { Injectable } from '@angular/core';
import { AuthGuard1Service } from './auth-guard1.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard1Guard implements CanActivate {
  constructor(private authService: AuthGuard1Service, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isloggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
