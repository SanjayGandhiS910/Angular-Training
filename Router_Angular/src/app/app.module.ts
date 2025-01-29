import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { User1Component } from "./users/user1/user1.component";
import { RoutingModule } from "./routing.module";
import { LoginComponent } from "./login/login.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UsersComponent,
        HomeComponent,
        AboutComponent,
        User1Component,
        LoginComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, RoutingModule]
})
export class AppModule{

}