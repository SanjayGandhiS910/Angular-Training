import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-user1',
  standalone: false,
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component implements OnInit{
  userId!: number;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  user!: any
  service: UsersServices = inject(UsersServices)

  ngOnInit(): void {
    //this.userId = this.activeRoute.snapshot.params['id'];
    //this.user = this.service.details.find(data => data.id == this.userId)

    this.activeRoute.params.subscribe((data)=>{
      this.userId = data['id'];
      this.user = this.service.details.find(data => data.id == this.userId)
    })
  }
}
