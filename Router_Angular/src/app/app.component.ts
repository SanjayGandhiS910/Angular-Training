import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { AppServices } from './app.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppServices]
})
export class AppComponent{

  // router: Router = inject(Router);
  // rel: ActivatedRoute = inject(ActivatedRoute);

  // onClick(){
  //   this.router.navigate(['action'], { relativeTo: this.rel});
  // }
  // title = 'augular-practice';
  // myObservable2 = interval(1);
  // onChange: any;
  // myObservable3: any;

  // @ViewChild('button')
  // button!: ElementRef;

  // myObservable1 = new Observable((obs)=>{
  //   setTimeout(()=>{obs.next('S')},1000)
  //   setTimeout(()=>{obs.next('A')},2000)
  //   setTimeout(()=>{obs.next('N')},3000)
  //   setTimeout(()=>{obs.next('J')},4000)
  //   setTimeout(()=>{obs.next('A')},5000)
  //   setTimeout(()=>{obs.next('Y')},6000)
  // })

  // ngOnInit(): void {
  //   // this.myObeservable1.subscribe((val)=>{
  //   //   console.log(val);
  //   // })
  //   // this.onChange = this.myObservable1.subscribe((val)=>{
  //   //   console.log(val);
  //   // })
  // }

  // stop(){
  //   this.onChange.unsubscribe()
  // }

  // ngAfterViewInit(): void {
  //   let count = 0;
  //   this.myObservable3 = fromEvent(this.button.nativeElement,'click')
  //                         .subscribe((val)=>{
  //                           console.log(val)
  //                           this.onShow(++count)
  //                         })
  // }

  // onShow(val: number){
  //   let a = document.createElement('h2')
  //   a.innerHTML = 'Item' + val
  //   a.classList.add('active')
  //   document.getElementById('container')?.appendChild(a)
  // }

}
