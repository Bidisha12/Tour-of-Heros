import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private router: Router) {}

    checkUserAvaliable()
    {
        if(localStorage.getItem('user') != null && localStorage.getItem('user') != undefined) 
            return true;
        else
            return false;
    }

    isLogin() {
       if(this.checkUserAvaliable())
            return true;
        else
            return false;

    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('password');
    }
}