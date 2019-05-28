import { Component, OnInit } from '@angular/core';

import { HttpService } from '@services/http.service';
import { Movie } from '@class/movie';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  moviePopularItems = [];

  constructor(
    private httpS: HttpService,
    private config: NgSelectConfig
	) {
    this.config.notFoundText = 'Не найдено';
  }

  ngOnInit() {
    this.httpS.get$('/movie/popular').subscribe(resp => {
      console.log(resp);
      resp['results'].forEach(movie => {
        const el = new Movie(movie);
        this.moviePopularItems.push(el);
      });
      console.log(this.moviePopularItems);
    })
  }
}
