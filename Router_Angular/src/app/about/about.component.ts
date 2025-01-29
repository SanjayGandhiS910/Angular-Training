import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  router: Router = inject(Router);
  onClick(val: string){
    this.router.navigate(['/users?'],{queryParams: {srh: val}})
  }
}
