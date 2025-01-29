import { Component, inject, OnInit } from '@angular/core';
import { AppServices } from '../app.services';
import { UsersServices } from './users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  name: string = '';
  name2: any = '';
  user!: any
  
  service: UsersServices = inject(UsersServices)

  active: ActivatedRoute = inject(ActivatedRoute);

  constructor(private appservice: AppServices){}

  ngOnInit(): void {
    this.appservice.getName.subscribe((val)=>{
      this.name = val;
    })

    this.active.queryParamMap.subscribe((data)=>{
      this.name2 = data.get('srh')
      
      if( this.name2 == undefined || this.name2 == '' || this.name2 == null ){
        this.user = this.service.details
      }else{
        this.user = this.service.details.filter( x => x.name.toLocaleLowerCase() == this.name2.toLocaleLowerCase())
      }
    })

    // this.name2 = this.active.snapshot.queryParams['srh']
    
    // if( this.name2 == undefined || this.name2 == '' || this.name2 == null ){
    //   this.user = this.service.details
    // }else{
    //   this.user = this.service.details.filter( x => x.name.toLocaleLowerCase() == this.name2.toLocaleLowerCase())
    // }
    
  }
}
