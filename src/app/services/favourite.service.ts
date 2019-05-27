import { Injectable } from '@angular/core';
import { Movie } from '@class/movie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() {
    
    const save = localStorage.getItem('save');
    if (save) {
      this.items = JSON.parse(save) as Array<Movie>;
    }

    const _this = this;
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('save', JSON.stringify(_this.items));
    });

  }

  private items = [];

  get() {
    return this.items;
  }

  add(movie: Movie) {
    if (this.items.some(movieFav => movieFav.id === movie.id)) { return; }
    this.items.push(movie);
  }

  delete(id: number) {
    const index = this.items.findIndex(movie => movie.id === id);
    this.items.splice(index, 1);
  }

  has(id: number): boolean {
    return this.items.some(movie => movie.id === id);
  }

}
