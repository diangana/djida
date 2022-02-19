import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/Article.model';
import { ArticleService } from '../service/article.service';
@Component({

  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {
@Input()
 currentArticle!:any;
 isadmin:any;
  constructor(private articleService: ArticleService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('role');

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
}
