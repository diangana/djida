import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CagnottesService } from 'src/app/service/cagnottes.service';
import { Cagnotte } from 'src/models/cagnotte.model';
import{UploadService} from 'src/app/service/upload.service'
@Component({
  selector: 'app-admin-add-cagnotte',
  templateUrl: './admin-add-cagnotte.component.html',
  styleUrls: ['./admin-add-cagnotte.component.css']
})

export class AdminAddCagnotteComponent implements OnInit {

  defaultstatus =true;
  currentCagnotte=new Cagnotte;
  isadmin?:any;
  loggedUser!:any;
  image=localStorage.getItem('upload');
  constructor( private cagnotteService:CagnottesService,
              private router:Router) { }
  ngOnInit(): void {
    let isadmin:any;

    this.loggedUser = localStorage.getItem('loggedUser');
    isadmin =  localStorage.getItem('role');
    ;
    if(isadmin==0){
      this.router.navigate(['/admin']);
      window. location. reload();
    }
    if (!this.loggedUser)
    this.router.navigate(['/connexion'])
    .then(()=>
    {
    window.location.reload();
    });


  }

  addCagnotte(){
    console.log(this.currentCagnotte.image);
    this.currentCagnotte.administrateur=this.loggedUser;
    this.currentCagnotte.image=localStorage.getItem('upload');
    this.cagnotteService.create(this.currentCagnotte).subscribe(prod=>{
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

