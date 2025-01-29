import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  rel: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    // this.rel.fragment.subscribe((data)=>{
    //   console.log(data)
    // })
  }
}
