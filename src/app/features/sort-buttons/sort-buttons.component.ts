import {Component} from "@angular/core";
import {MainComponent} from "../main/main.component";
import {MovieService} from '../services/movie.service'

@Component({
  selector: "sort-buttons",
  templateUrl: "app/features/sort-buttons/sort-buttons.component.html",
  styleUrls: ["app/features/sort-buttons/sort-buttons.component.css"],
  providers: [MovieService]
})
export class SortButtonsComponent {
  itemData: any[];
  name = 'Sort Movies';
  nameByLike = 'by likes';
  nameByRating = 'by rating';

  constructor(private main: MainComponent, private service: MovieService) {

  }

  likes() {
    this.service.getItemes().subscribe(
      result => {
        this.itemData = result.sort((a: any, b: any) => b['likes'] - a['likes']);
        this.main.setItemData(this.itemData);
      },
      error => console.log(error.statusText)
    );
  }

  rating() {
    this.service.getItemes().subscribe(
      result => {
        this.itemData = result.sort((a: any, b: any) => b['stars'] - a['stars']);
        this.main.setItemData(this.itemData);
      },
      error => console.log(error.statusText)
    )
  }
}
