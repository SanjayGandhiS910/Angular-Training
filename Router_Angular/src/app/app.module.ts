import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'users', component: UsersComponent},
    {path: '**', component: UsersComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UsersComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)]
})
export class AppModule{

}