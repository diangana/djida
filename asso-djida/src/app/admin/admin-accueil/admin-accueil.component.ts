import { Adherent } from 'src/models/Adherent.model';
import { AdherentService } from './../../service/adherent.service';
import { AuthService } from './../../service/auth.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Data, Router } from '@angular/router';
import { PanierService } from 'src/app/service/panier.service';
import { CagnottesService } from 'src/app/service/cagnottes.service';
import { Cagnotte } from 'src/models/cagnotte.model';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.css']
})
export class AdminAccueilComponent implements OnInit {
@Output()
cotisations?:Cagnotte[];

  isLoggedin!: boolean;
  loggedUser:any;
  isadmin:any;
  user!:any;
  today!:Date;
fin_cot!:Date;
  m!:number;
  cotisation!:any;
constructor(public authService: AuthService,
    private router: Router,private adherentService:AdherentService,private panier: PanierService,private cagnotteService:CagnottesService) { }
    ngOnInit(): void {
      this.today=new Date();
      let isloggedin: any;
      isloggedin = localStorage.getItem('isloggedIn');
      this.loggedUser = localStorage.getItem('loggedUser');
      this.isadmin=localStorage.getItem('role');

      if (isloggedin!="true" || !this.loggedUser)
          this.router.navigate(['/connexion'])
          .then(()=>
          {
          window.location.reload();
          });

   /* let m=data.length;
   for(let i=0;i<data.length;i++){
  if(data[i].categorie="cotisation"){
    this.cotisation=data[i];
  console.log("cotisation"+this.cotisation);
  console.log("data"+data);

  */

  this.cagnotteService.getAll()
    .subscribe(
      data =>{
        this.m=data.length;
   for(let i=0;i<data.length;i++){
    this.cotisations=data;
  console.log(this.cotisation);
      }
      },
      error =>{
        console.log(error)

      });
      this.authService.setLoggedUserFromLocalStorage(this.loggedUser);
      this.adherentService.get(this.loggedUser).subscribe(
        data =>{
          this.user=data;
          this.fin_cot=this.addDays(new Date(this.user[0].date_cotisation),365)
         },
        error =>{
          console.log(error)
        });
      }

    onLogout(){
      this.authService.logout();
    }

    addDays(dates: Date, days: number): Date {
      dates.setDate(dates.getDate() + days);
      return dates;
  }
  handelAddToCart = (product: any) => {
    this.panier.addItemsToCart(product);

  }
}
