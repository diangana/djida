import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'asso-djida';
  isLoggedin!: boolean;
  isadmin:any;
  cookies:any;
  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    let isloggedin: any;
    let loggedUser:any;
    let isadmin:any;
    isadmin= localStorage.getItem('role');
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    this.cookies=localStorage.getItem('cookies')
    this.isadmin=localStorage.getItem('role');
   
  }
acceptCookies(){
  localStorage.setItem("cookies","true")
  window.location.reload();

}
}
