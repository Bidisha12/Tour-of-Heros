import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard1Service {
  constructor() {}
  isloggedIn() {
    return !!localStorage.getItem('isLoggedin');
  }
}
