import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Article } from 'src/models/Article.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
articles:Article[] | null=null;
isadmin!:any;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.retrieveArticle();
    this.isadmin = localStorage.getItem('role');

  }
  retrieveArticle() {
this.articleService.getAll()
.subscribe(
  data=>{
    this.articles=data;
    console.log(data);
  },error=>
  {
      console.error();
  });
 }

}
