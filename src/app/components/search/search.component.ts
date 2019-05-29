import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '@class/movie';
import { HttpService } from '@services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private httpS: HttpService
  ) { }

  selectedMovie;

  searchItems$ = new Subject();

  searchQuery = {
    query: '',
    total_pages: 0,
    page: 0,
    results: []
  };

  onSearch(ev) {
    if (ev.term.trim()) {
      this.httpS.getSearch$(ev.term).subscribe(resp => {

        Object.assign(this.searchQuery, resp);
        this.searchQuery.query = ev.term;

        this.searchItems$.next(this.searchQuery.results);
      });
    } else {
      this.searchItems$.next([]);
    }
  }

  onScrollToEnd() {
    console.log('end');
    this.searchQuery.page++;
    if (this.searchQuery.page > this.searchQuery.total_pages) { return; }
    this.httpS.getSearch$(this.searchQuery.query + '&page=' + this.searchQuery.page)
    .subscribe(resp => {
      this.searchQuery.results = this.searchQuery.results.concat(resp['results'] as Array<Movie>);
      this.searchItems$.next(this.searchQuery.results);
    });
  }
}
