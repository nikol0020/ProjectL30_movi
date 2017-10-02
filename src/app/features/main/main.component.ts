import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {StarsComponent} from '../stars/stars.component';

@Component({
  selector: 'main',
  templateUrl: 'app/features/main/main.component.html',
  styleUrls: ['app/features/main/main.component.css'],
  providers: [MovieService]
})
export class MainComponent implements OnInit {
  itemData: any[];
  stars: number = 0;
  title: string = '';
  likes: number = 0;
  posterUrl: string = '';
  director: string = '';
  actors: string = '';
  genres: string = '';
  description: string = '';
  toggoleShowHide: string = 'hidden';
  widthMainContent: string = '100%';

  like(item: Object) {
    item['likes']++;
    this.likeRender(item);
  }

  dislike(item: Object) {
    if(item['likes'] > 0) {
      item['likes']--;
      this.likeRender(item);
    }
  }

  getItemData() {
    return this.itemData;
  }

  setItemData(itemData: any[]) {
    return this.itemData = itemData;
  }

  close() {
    this.toggoleShowHide = 'hidden';
    this.widthMainContent = '100%';
  }

  render(details: Object) {
    this.title = details['title'];
    this.likes = details['likes'];
    this.posterUrl = details['posterUrl'];
    this.director = details['director'];
    this.actors = details['actors'];
    this.genres = details['genres'];
    this.description = details['description'];
    this.toggoleShowHide = 'visible';
    this.widthMainContent = '50%';
  }

  constructor(private service: MovieService) {
  }

  ngOnInit() {
    this.service.getItemes().subscribe(
      result => this.itemData = result,
      error => console.log(error.statusText)
    );
}

  private likeRender(item: any) {
    this.service.likeMovie(item).subscribe(
      result => console.log(result.status),
      error => console.log(error))
  };
}
