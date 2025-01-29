import { inject, Injectable } from "@angular/core";
import { UserDetailsService } from "./userdetails.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthService{

    isLogged = false;

    router: Router = inject(Router)

    user: any;

    users: UserDetailsService = inject(UserDetailsService);

    login(username: string, password: string){
        this.user = this.users.users.find( user => user.username === username && user.password === password)
        if(this.user === undefined){
            this.isLogged = false;
        }else{
            this.router.navigate(['/home'])
            alert('hello '+ this.user.name)
            this.isLogged = true;
        }
    }

    logout(){
        this.isLogged = false
    }
}