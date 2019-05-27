import { Component, OnInit } from '@angular/core';

import { FavouriteService } from '@services/favourite.service';
import { Movie } from '@class/movie';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor(
    private favoriteS: FavouriteService
  ) { }

  favoriteItems: Array<Movie>;

  ngOnInit() {
    this.favoriteItems = this.favoriteS.get();
  }

  deleteFavourite(id: number) {
    this.favoriteS.delete(id);
  }

}
