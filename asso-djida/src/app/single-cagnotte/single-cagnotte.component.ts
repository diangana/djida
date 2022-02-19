import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{Cagnotte} from 'src/models/cagnotte.model'
import { AdherentService } from '../service/adherent.service';
import { AuthService } from '../service/auth.service';
import { CagnottesService } from '../service/cagnottes.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-single-cagnotte',
  templateUrl: './single-cagnotte.component.html',
  styleUrls: ['./single-cagnotte.component.scss']
})
export class SingleCagnotteComponent implements OnInit {
  public registerForm: FormGroup | undefined;
  nom_cagnotte = '';
  today=new Date();
  isadmin =  localStorage.getItem('role');
  loggedUser:any;
  user!:any;
  fin_cot!:Date;

  constructor(private cagnotteService:CagnottesService,private route: ActivatedRoute, private panier: PanierService,private router: Router,public authService: AuthService,private adherentService:AdherentService) {}
    @Output()
  sendRequestData = new EventEmitter(); // Emetteur d'évènement
@Input()
currentCagnotte!:any;

    ngOnInit(): void {
      this.loggedUser= localStorage.getItem('loggedUser');
      const id=this.route.snapshot.params['id'];
      this.retrieveCagnotte(id);
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
      addDays(dates: Date, days: number): Date {
        dates.setDate(dates.getDate() + days);
        return dates;
    }
    retrieveCagnotte(id:any):void {
      this.cagnotteService.get(id)
      .subscribe(
        data =>{
          this.currentCagnotte=data;
          console.log(data);
          console.log(this.currentCagnotte);
        },

        error =>{
          console.log(error);

        });
    }

        handelAddToCart = (product: any) => {
      this.panier.addItemsToCart(product);
    }

  }
