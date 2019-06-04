import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import { NgSelectModule } from '@ng-select/ng-select';


import { HttpService } from '@services/http.service';
import { FavouriteService } from '@services/favourite.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { AsideComponent } from './components/aside/aside.component';
import { SearchComponent } from './components/search/search.component';
import { OneMovieComponent } from './components/one-movie/one-movie.component';
import { PopularComponent } from './components/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    AsideComponent,
    SearchComponent,
    OneMovieComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,

    NgSelectModule,
    FormsModule
  ],
  providers: [
    HttpService,
    FavouriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
