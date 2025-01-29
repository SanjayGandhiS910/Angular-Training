import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  isExit: boolean = false;

  user: AuthService = inject(AuthService);

  onExit(){
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value

    if((username || password) && !this.isExit){
      return confirm('Do you want leave without login???')
    }else{
      return true
    }
  }

  onLogin(){
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value

    this.user.login(username,password)

    this.isExit = true
  }
}
