import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedin: any;
    loggedUser:any;

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.isLoggedin = localStorage.getItem('isloggedIn');
    this.loggedUser = localStorage.getItem('loggedUser');

  }

  onLogout(){
    this.authService.logout();
  }

}
