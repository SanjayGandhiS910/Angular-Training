import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { User1Component } from "./users/user1/user1.component";
import { LoginComponent } from "./login/login.component";
import { UserAuthService } from "./Services/user.auth.service";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'users', component: UsersComponent},
    //{path: 'users/user/:id', component: User1Component},
    {path: 'users', canActivateChild: [UserAuthService],children: [
        {path: 'user/:id', component: User1Component}
    ]},
    {path: 'login', component: LoginComponent, canDeactivate: [UserAuthService]},
    {path: '**', component: UsersComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{

}