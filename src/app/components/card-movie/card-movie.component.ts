import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@class/movie';

import { HttpService } from '@services/http.service';

@Component({
  selector: 'card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  constructor(
    private httpS: HttpService
  ) { }

  @Input() movie: Movie;
  poster;

  ngOnInit() {
    console.log(this.movie);
    this.httpS.getImg$(this.movie.poster_path).subscribe(img => {
      this.poster = img;
    })
  }

}
