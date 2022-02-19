import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Adherent } from 'src/models/Adherent.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user= new Adherent;
  isValidUser!: Boolean;

  constructor(private authService : AuthService,
    public router: Router) { }

  ngOnInit(): void {
  }
onLoggedin(){
  console.log(this.user);
  this.isValidUser=this.authService.SignIn(this.user);
}
}
