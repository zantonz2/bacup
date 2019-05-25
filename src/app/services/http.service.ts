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
    const pathIn = (path.match('?')) ? path : path + '?';
		  return new Observable(observer => {
			this.http.get('https://api.themoviedb.org/3/' + pathIn + '&api_key=<<api_key>>&language=ru')
			.subscribe(res => {
				observer.next(res);
				observer.complete();
			}, err => {
				console.error('error in get core', err);
				observer.error(err);
				observer.complete();
			});
		});
	}

}

