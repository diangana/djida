import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cagnotte } from 'src/models/cagnotte.model';
import { CagnottesService } from '../service/cagnottes.service';

@Component({
  selector: 'app-modif-cagnotte',
  templateUrl: './modif-cagnotte.component.html',
  styleUrls: ['./modif-cagnotte.component.scss']
})
export class ModifCagnotteComponent implements OnInit {

  defaultstatus =true;
  currentCagnotte!:any;
  loggedUser!:any;
  image=localStorage.getItem('upload');
  isadmin =  localStorage.getItem('role');
  constructor( private cagnotteService:CagnottesService,
              private router:Router,private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.loggedUser = localStorage.getItem('loggedUser');
    ;
    if(this.isadmin=='0'){
      this.router.navigate(['/cagnottes']);
      window. location. reload();
    }
    if ( !this.loggedUser)
    this.router.navigate(['/cagnottes'])
    .then(()=>
    {
    window.location.reload();
    });

    const id=this.route.snapshot.params['id'];
    this.retrieveCagnotte(id);
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
  modifCagnotte(cagnotte:Cagnotte){
    cagnotte.administrateur=this.loggedUser;
    if(this.image!=null)
    cagnotte.image=this.image;
    this.cagnotteService.update(cagnotte).subscribe(prod=>{
      console.log(prod);
      localStorage.removeItem('upload');
      this.router.navigate(['cagnottes']).then(()=>
      {
      window.location.reload();
      });
    });
   // console.log(this.currentCagnotte)
   localStorage.removeItem('upload');
   // this.router.navigate(['cagnottes']);
  }

}

