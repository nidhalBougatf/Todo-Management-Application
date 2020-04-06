import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BasicAuthentificationService } from './basic-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {



  constructor(private basicAuthentificationService: BasicAuthentificationService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthentificationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])
    return false;
  }


}
