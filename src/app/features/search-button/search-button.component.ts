import {Component} from "@angular/core";
import {MainComponent} from "../main/main.component";
import {MovieService} from '../services/movie.service'

@Component({
  selector: "search-button",
  templateUrl: "app/features/search-button/search-button.component.html",
  styleUrls: ["app/features/search-button/search-button.component.css"]
})

export class SearchButtonComponent {
  newSearchTitle: string = '';
  itemData: any[];

  constructor(private service: MovieService, private main: MainComponent) {
  }

  onSearch(form: any) {
    this.service.getItemes().subscribe(
      result => {
        this.itemData = result.filter((item: any) => (item['title'].toLowerCase().indexOf(form.value.title) !== -1));
        this.main.setItemData(this.itemData);
      },
      error => console.log(error.statusText));
  }

}

