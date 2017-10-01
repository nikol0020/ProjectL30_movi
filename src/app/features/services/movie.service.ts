import  {Injectable} from  '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MovieService {

  itemes: any[];

  constructor(private  http: Http) {

  }

  getItemes(): Observable<any> {
    return this.http.get('app/items')
      .map(response => response.json().data);
  }

  likeMovie(item: any): Observable<any> {
    return this.http.post('app/items', item)
      .map(response => response);
  }
}

