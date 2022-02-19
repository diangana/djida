import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherentService } from 'src/app/service/adherent.service';
import { Adherent } from 'src/models/Adherent.model';

@Component({
  selector: 'app-modif-adherent',
  templateUrl: './modif-adherent.component.html',
  styleUrls: ['./modif-adherent.component.scss']
})
export class ModifAdherentComponent implements OnInit {
  adherents!: any;
  modifadherents!: Adherent;

  isadmin?:any;
  loggedUser!:any;
  constructor(private router:Router,private adherentService:AdherentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem('loggedUser');
    this.isadmin =  localStorage.getItem('role');
    const id=this.route.snapshot.params['id'];


    this.adherentService.get(id).subscribe(
      data =>{
        this.adherents=data;

       },
      error =>{
        console.log(error)
      });

    }

  modifAdherent(adherent:Adherent){
   this.adherentService.update(adherent).subscribe(prod=>{
    this.router.navigate(['admin/adherent/list']).then(()=>
    {
    window.location.reload();
    });
  });
  }

}
