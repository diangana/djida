import { Component, OnInit, Output,EventEmitter, Input, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { AdherentService } from 'src/app/service/adherent.service';
import { Adherent } from 'src/models/Adherent.model';

@Component({
  selector: 'app-admin-adherent',
  templateUrl: './admin-adherent.component.html',
  styleUrls: ['./admin-adherent.component.scss']
})
export class AdminAdherentComponent implements OnInit {
  isadmin!:any;
  today!:Date;
lastyear!:Date;
cot!:Date;
m: any;
loggedUser = localStorage.getItem('loggedUser');

 constructor(private adherentService:AdherentService,private router:Router) { }
  @Output()
  sendRequestData = new EventEmitter(); // Emetteur d'évènement
  @Input()
  adherents:Adherent[]=[];
  adherents_pas: Adherent[]= [];


  ngOnInit(): void {
    this.today=new Date();
    console.log("aujourdui"+this.today)
this.lastyear=this.addDays(this.today);
console.log("il y 1an"+this.lastyear)

    this.listAdherent();
    this.isadmin = localStorage.getItem('role');
    if(this.isadmin==0){
      this.router.navigate(['/admin']);
    }
    if ( !this.loggedUser)
    this.router.navigate(['/connexion'])
    .then(()=>
    {
    window.location.reload();
    });


  }
  addDays(dates:Date): Date {

      dates.setDate(dates.getDate() - 365);
    return dates;

}
  listAdherent() {
    this.adherentService.getAll().subscribe(
      data=>{
         this.m=data.length;
   for(let i=0;i<data.length;i++){
    this.cot=new Date(data[i].date_cotisation);
    console.log("fin de cotisation"+this.cot)

    if( this.cot<=this.lastyear){
        this.adherents_pas[i]=data[i];
        console.log("aderent pas a jour"+this.adherents_pas)
        }

        if( this.cot>this.lastyear){
          this.adherents[i]=data[i];
          console.log(this.adherents);
                }
      }
      }, error=>
  {
      console.error();
  });

}
supprimer(email:string){
  console.log(email);
  let conf=confirm("Etes-vous sûr?");
if(conf)
  this.adherentService.deleteUser(email).subscribe(()=>{
  alert("adhérent"+email+" a bien ete suprimer");
 });
 this.router.navigate(['admin/adherent/list']).then(()=>
{
window.location.reload();
});
}
}
