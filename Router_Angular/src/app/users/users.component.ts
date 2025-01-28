import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  name: string = '';

  constructor(private appservice: AppServices){}

  ngOnInit(): void {
    this.appservice.getName.subscribe((val)=>{
      this.name = val;
    })
  }
}
