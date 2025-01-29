import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServices } from '../app.services';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  router: Router = inject(Router);
  rel: ActivatedRoute = inject(ActivatedRoute);

  onClick(){
    //this.router.navigate(['action'], { relativeTo: this.rel});
    //console.log(this.rel.snapshot.params['id'])
  }
  
  // name: string = '';

  // constructor(private appservice: AppServices){}

  // onSumit(){
  //   this.appservice.onSubmit(this.name);
  //   this.name = ''
  // }

  // ngOnInit(): void {
  //   const sub = new ReplaySubject<number>();

  //   sub.next(100)

  //   sub.subscribe((data => console.log("sub1 : "+data)))

  //   sub.next(200)

  //   sub.subscribe((data => console.log("sub2 : "+data)))

  //   sub.next(300)

  //   sub.subscribe((data => console.log("sub3 : "+data)))
  // }
}
