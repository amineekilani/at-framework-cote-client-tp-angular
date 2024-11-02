import { Component, Input } from '@angular/core';
import { ArticleAddComponent } from "../article-add/article-add.component";
import { Article } from '../models/article';
@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleAddComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent
{
  @Input() SearchValue: string="";
  Articles=
  [
    new Article(0,"Mens adidas Originals LFSTLR Jersey 24/25 Charcoal","https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMT0303-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75","2024-11-02","This Real Madrid jersey puts football fashion front and centre with iconic details inspired by adidas heritage. An iconic Trefoil joins the club's famous badge on the chest. Whether they're heading to the game or just out for a coffee, this modern classic allows die-hard Los Blancos fans to rep their club in a whole new way."),
    new Article(1,"Mens Home Authentic Shirt 24/25 White","https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2Frmcfmz0196-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=75","2024-11-01","This product is made with 100% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.")
  ];
  action="";
  selectedBookId!: number;
  changeAction(action: string)
  {
    this.action=action;
  }
  addArticle(article:Article)
  {
    this.Articles=[...this.Articles,article];
    this.changeAction("");
  }
  moveUp(i:number)
  {
    this.Articles[i].score++;
    this.sortArticles();
  }
  moveDown(i:number)
  {
    if(this.Articles[i].score>0)
    {
      this.Articles[i].score--;
      this.sortArticles();
    }
  }
  sortArticles()
  {
    this.Articles.sort((a,b)=>b.score-a.score);
  }
  filteredArticles()
  {
    return this.Articles.filter(article=>article.title.toLowerCase().startsWith(this.SearchValue.toLowerCase()));
  }
}