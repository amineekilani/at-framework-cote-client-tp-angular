import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesListComponent } from "./articles-list/articles-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-angular';
  searchValue: string="";
  changeSearchValue(event: Event): void
  {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
  }
}