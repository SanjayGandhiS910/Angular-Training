import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LoginComponent } from "../login/login.component";

@Injectable({
    providedIn: 'root'
})
export class UserAuthService implements CanActivate, CanActivateChild,
CanDeactivate<LoginComponent>{
    router: Router = inject(Router)
    
    users: AuthService = inject(AuthService)

    active: ActivatedRoute = inject(ActivatedRoute)
      
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | Observable<boolean> | Promise<boolean>{
        if(this.users.isLogged){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.canActivate(childRoute,state)
    }

    canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, 
            currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
        return component.onExit();
    }

}