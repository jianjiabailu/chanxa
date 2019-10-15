import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root',})
export class AuthGuard implements CanActivate {

    redirectUrl : string;

    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        let isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn) { return true; }
        // Store the attempted URL for redirecting
        this.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['login']);
        return false;
    }
}
