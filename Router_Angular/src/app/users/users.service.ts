import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class UsersServices{
    details = [
        {id: 1,name: 'HTML'},
        {id: 2,name: 'CSS'},
        {id: 3,name: 'JavaScript'},
        {id: 4,name: 'TypeScript'},
        {id: 5,name: 'Angular'}
    ]
}