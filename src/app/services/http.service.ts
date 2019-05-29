import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(
    	private http: HttpClient,
    ) { }

  private apiKey = '6c950f5c657e5424c474020a36bfafe2';

	get$(path: string) {
  	const pathIn = (path.match(/\?/)) ? path : path + '?';
		return this.http.get(`https://api.themoviedb.org/3${pathIn}api_key=${this.apiKey}&language=ru`);
	}

	getSearch$(query: string) {
		return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=ru&query=${query}`);
	}

	getImg$(path: string) {
		return new Observable(observer => {
			this.http.get(`https://image.tmdb.org/t/p/original${path}`, {responseType: 'blob'})
			.subscribe(blob => {
				const reader = new FileReader();
				reader.addEventListener('load', () => {
					observer.next(reader.result);
					observer.complete();
				}, false);
				reader.readAsDataURL(blob);
			});
		});
	}

}

