import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Article } from '../models/article';
@Component({
  selector: 'app-article-add',
  standalone: true,
  imports: [],
  templateUrl: './article-add.component.html',
  styleUrl: './article-add.component.css'
})
export class ArticleAddComponent {
  @Input() lastId = 0;
  @Output() articleCreated = new EventEmitter <Article>();
  addArticle(title :string, dateDeCreation :string, url : string, description : string)
  {
    const newArticle = new Article(
      this.lastId +1,
      title,
      url,
      dateDeCreation,
      description
  );
  this.articleCreated.emit(newArticle);
  }
}
