import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }
  
  path: ActivatedRouteSnapshot[]; 
   route: ActivatedRouteSnapshot;
   
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('userToken') != null)
    {
      console.log(true)
      return true;
    } 
    this.router.navigate(['/login']);
    console.log(true)
    return false;
  }
}
