import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneMovieComponent } from '@components/one-movie/one-movie.component';
import { PopularComponent } from '@components/popular/popular.component';

const routes: Routes = [
  { path: 'popular', component: PopularComponent },
  {	path: 'one-movie/:id', component: OneMovieComponent},
  { path: '', redirectTo: '/popular', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
