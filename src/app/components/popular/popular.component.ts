import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { Movie } from '@class/movie';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(
    private httpS: HttpService
  ) { }

  movieItems = [];

  ngOnInit() {
    this.httpS.get$('/movie/popular').subscribe(resp => {
      console.log(resp);
      resp['results'].forEach(movie => {
        const el = new Movie(movie);
        this.movieItems.push(el);
      });
      console.log(this.movieItems);
    })
  }

}
