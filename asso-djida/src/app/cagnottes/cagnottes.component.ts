import { Adherent } from 'src/models/Adherent.model';
import { AuthService } from 'src/app/service/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{Cagnotte} from 'src/models/cagnotte.model'
import { CagnottesService } from '../service/cagnottes.service';
import { error } from 'console';
@Component({
  selector: 'app-cagnottes',
  templateUrl: './cagnottes.component.html',
  styleUrls: ['./cagnottes.component.css'],
})
export class CagnottesComponent implements OnInit{
  cagnottes?:Cagnotte[];
  currentCagnotte:Cagnotte= {};
  currentIndex = -1;
  id_cagnotte =1;
  isadmin!:any;
  loggedUser:string | null | undefined;
  cloture!:Date;
  today=new Date();
  today1=this.today.toDateString()
     constructor(private cagnotteService:CagnottesService,private router:Router ){}
  ngOnInit(): void {
this.retrieveCagnotte();
this.loggedUser=localStorage.getItem('loggedUser');
this.isadmin =  localStorage.getItem('role');
console.log(this.isadmin)
  }
  retrieveCagnotte():void {
    this.cagnotteService.getAll()
    .subscribe(
      data =>{
        this.cagnottes=data;
          for (let i = 0; i < data.length; i++) {
            this.modifierStatut(data[i])
          }


        console.log(data);
      },
      error =>{
        console.log(error)

      });
  }
  modifierStatut(cagnotte:Cagnotte):void{
    let cloture=new Date(cagnotte.date_cloture)
    if(this.today>=cloture){
      cagnotte.statut=0;
      cagnotte.date_cloture=cloture.toLocaleTimeString();
    this.cagnotteService.update(cagnotte).subscribe(
      data=>{
        this.router.navigate(['cagnotte']);
      },(error)=>
      {
        console.log(
          "Problème lors de la modification!"
          );
      });
    }
  }
  supprimer(id:any):void{
    alert("voulez-vous vraiment supprimer?")
    this.cagnotteService.delete(id).subscribe(
      data=>{
        this.router.navigate(['/cagnottes']);
      },(error)=>
      {
        console.log(
          "Problème lors de la modification!"
          );
      });
    }

  refreshList(): void {
    this.retrieveCagnotte();
    this.currentCagnotte = {};
    this.currentIndex = -1;
  }
  setActiveCagnotte(tutorial: Cagnotte, index: number): void {
    this.currentCagnotte = tutorial;
    this.currentIndex = index;
  }
}
