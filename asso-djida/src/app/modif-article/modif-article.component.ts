import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/Article.model';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.component.html',
  styleUrls: ['./modif-article.component.scss']
})
export class ModifArticleComponent implements OnInit {

article=new Article;
isadmin?:boolean;
image=localStorage.getItem('upload');
video=localStorage.getItem('uploadvideo');
currentArticle!:any;
today=new Date().toISOString().split('T')[0];
constructor(private articleService:ArticleService,
  private router:Router,private authService:AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let isadmin:any;
    let loggedUser:any;
    loggedUser = localStorage.getItem('loggedUser');
    isadmin =  localStorage.getItem('role');
    if(isadmin==0){
      console.log(isadmin);
      this.router.navigate(['/article']);
    }
    if ( !loggedUser)
    this.router.navigate(['/article'])
    .then(()=>
    {
      this.router.navigate(['/article'])
    });

    const id=this.route.snapshot.params['id'];
    this.currentArticle=this.retrieveArticle(+id);

  }
  retrieveArticle(id:any):void {
    this.articleService.get(id)
    .subscribe(
      data =>{
        this.currentArticle=data;
        console.log(data);
        console.log(this.currentArticle);
      },
      error =>{
        console.log(error)

      });

  }
  modifArticle(article:Article){
    console.log(this.image);
    console.log(this.video);
    if(this.image!=null)
    article.image=this.image;
    if(this.video!=null)
    article.video=this.video;
    article.date_creation=this.today;
    article.auteur=localStorage.getItem('loggedUser');
  this.articleService.update(article).subscribe(prod=>{

     console.log(prod);
    });
    localStorage.removeItem('uploadvideo');

    localStorage.removeItem('upload');
   // console.log(this.article)
    this.router.navigate(['article']);
  }
}
