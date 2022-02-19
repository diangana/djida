import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdherentService } from 'src/app/service/adherent.service';
import { Adherent } from 'src/models/Adherent.model';

@Component({
  selector: 'app-admin-add-adherent',
  templateUrl: './admin-add-adherent.component.html',
  styleUrls: ['./admin-add-adherent.component.scss']
})
export class AdminAddAdherentComponent implements OnInit {
adherent= new Adherent;
isadmin?:any;
loggedUser!:any;

  constructor(private router:Router,private adherentService:AdherentService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('loggedUser');
    this.isadmin =  localStorage.getItem('role');
    ;
    if(this.isadmin==0){
      this.router.navigate(['/admin']);
      window. location. reload();
    }
    if ( !this.loggedUser)
    this.router.navigate(['/connexion'])
    .then(()=>
    {
    window.location.reload();
    });

  }
  strRandom(longeur?:any) {
    if(!longeur)
        longeur = 15;
       let lettres = 'abcdefghijklmnopqrstuvwxyz',
        chaineAlea = '',
        d = 0,
        caracteres = '1234567890'+lettres;
        caracteres += lettres.toUpperCase();
        chaineAlea = lettres[Math.floor(Math.random() * lettres.length)];


    for (d = 1; d < longeur; d++) {
      chaineAlea += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return chaineAlea;
  }
  addAdherent(){
    this.adherent.password=this.strRandom();
    if(this.adherent.admin!=1)
    this.adherent.admin=0
else
this.adherent.admin=1

   this.adherentService.create(this.adherent).subscribe(prod=>{
    console.log(prod);
    this.router.navigate(['admin/adherent/list']).then(()=>
    {
    window.location.reload();
    });
  });
  }

}
