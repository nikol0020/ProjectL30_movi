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
  flagLikes : boolean = false;
  flagRating : boolean = false;

  constructor(private main: MainComponent, private service: MovieService) {

  }

  likes() {
    this.service.getItemes().subscribe(
      result => {
        if (!this.flagLikes) {
          this.itemData = result.sort((a: any, b: any) => b['likes'] - a['likes']);
        } else {
          this.itemData = result.sort((a: any, b: any) => a['likes'] - b['likes']);
        }
        this.main.setItemData(this.itemData);
        this.flagLikes  = !this.flagLikes;
      },
      error => console.log(error.statusText)
    );
  }

  rating() {
    this.service.getItemes().subscribe(
      result => {
        if (!this.flagRating) {
        this.itemData = result.sort((a: any, b: any) => b['stars'] - a['stars']);
        } else {
          this.itemData = result.sort((a: any, b: any) => a['stars'] - b['stars']);
        }
        this.main.setItemData(this.itemData);
        this.flagRating  = !this.flagRating
      },
      error => console.log(error.statusText)
    )
  }
}
