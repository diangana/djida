import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Adherent } from 'src/models/Adherent.model';
import { AdherentService } from './adherent.service';
const baseUrl = 'http://localhost:3000/adherent';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private adherentService!: AdherentService;
public loggedUser!: string;
public Usertemp!: string;
public isloggedIn: Boolean = false;
public validUser: Boolean=false;
public roles?: number;
public users!:any;
  constructor( private router: Router,private adherentsService: AdherentService,
    ) {

      this.adherentService=adherentsService;
      this.users=this.adherentService.getAll();

    }
  logout() {
    this.roles = undefined;
    this.isloggedIn = false;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/connexion']).then(()=>
    {
    window.location.reload();
    });
  }
  SignIn(user :Adherent):Boolean{
    this.adherentService.getconn(user.email,user.password).subscribe(
      data =>{
        this.loggedUser = user.email;
        user=data;
          this.validUser = true;
          this.isloggedIn = true;
          this.roles = data[0].admin;
          localStorage.setItem('loggedUser',this.loggedUser);
          localStorage.setItem('role',String(this.roles));
          localStorage.setItem('isloggedIn',String(this.isloggedIn));
          this.router.navigate(['/admin']).then(()=>
          {
          window.location.reload();
          });
          return this.validUser;
        },
      error =>{
        this.validUser = false;
        console.log(error);
        return this.validUser;

      });

    return this.validUser;

  }
  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
  }



}


