import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@services/http.service';
import { forkJoin } from 'rxjs';
import { Movie } from '@class/movie';

@Component({
  selector: 'one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent  {

  private id;
  private info;
  preload = false;
  backdrop;
  poster;
  companyLogo = [];
  recomendations = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private httpS: HttpService,
    private elRef: ElementRef
  ) {
    activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.preload = true;
      this.initial();
    });
  }

  private initial() {
    this.httpS.get$('/movie/' + this.id).subscribe(info => {
      this.info = info;
      this.info.release_date = new Date(info['release_date']).toLocaleString('ru',
        {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }
      );
      console.log(this.info);
      this.preload = false;
      this.httpS.getImg$(info['backdrop_path']).subscribe( img => this.backdrop = img);
      this.httpS.getImg$(info['poster_path']).subscribe( img => this.poster = img);
      this.getCompanyLogo();
      setTimeout( () => {
        const flags = this.elRef.nativeElement.querySelectorAll('.flag-icon');
        flags.forEach((el, ind) => {
          const country = info['production_countries'][ind].iso_3166_1.toLowerCase();
          el.classList.add('flag-icon-' + country);
        });
      }, 0);
      this.getRecomendation();
    })
  }

  private getRecomendation() {
    this.httpS.get$('/movie/' + this.id + '/recommendations').subscribe( res => {
      this.recomendations = res['results'] as Array<Movie>;
    });
  }

  private getCompanyLogo() {
    const logoReq = [];
    this.info['production_companies'].forEach(company => {
      if (company['logo_path']) {
        logoReq.push(this.httpS.getImg$(company.logo_path));
      }
    });
    forkJoin(logoReq).subscribe(res => {
      console.log(res);
      this.companyLogo = res;
    })
  }

}
