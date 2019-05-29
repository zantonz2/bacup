import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '@class/movie';

import { HttpService } from '@services/http.service';
import { FavouriteService } from '@services/favourite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  constructor(
    private httpS: HttpService,
    private favouriteS: FavouriteService,
    private router: Router
  ) { }

  @Input() movie: Movie;
  poster;

  favourite() {
    return this.favouriteS.has(this.movie.id);
  }

  ngOnInit() {
    this.httpS.getImg$(this.movie.poster_path).subscribe(img => {
      this.poster = img;
    });
  }

  changeFavourite() {
    if (this.favourite()) {
      this.favouriteS.delete(this.movie.id);
    } else {
      this.favouriteS.add(this.movie);
    }
  }

  oneMovie() {
    this.router.navigate(['/one-movie', this.movie.id]);
  }
}
