import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { AuthService } from 'src/app/service/auth.service';
import { Article } from 'src/models/Article.model';
@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.css']
})
export class AdminAddArticleComponent implements OnInit {
article=new Article;
isadmin?:boolean;
image=localStorage.getItem('upload');
video=localStorage.getItem('uploadvideo');

  constructor(private articleService:ArticleService,
              private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    let isadmin:any;
    let loggedUser:any;
    loggedUser = localStorage.getItem('loggedUser');
    isadmin =  localStorage.getItem('role');
    if(isadmin==0){
      console.log(isadmin);
      this.router.navigate(['/admin']);
    }
    if ( !loggedUser)
    this.router.navigate(['/connexion'])
    .then(()=>
    {
    window.location.reload();
    });

  }
  addArticle(){
    this.article.image=this.image;
    this.article.video=this.video;
    this.article.auteur=localStorage.getItem('loggedUser');

  this.articleService.create(this.article).subscribe(prod=>{

     console.log(prod);
    });
    localStorage.removeItem('uploadvideo');

    localStorage.removeItem('upload');
   // console.log(this.article)
    this.router.navigate(['article']);
  }
}
