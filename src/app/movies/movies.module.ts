import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PrimeModule } from '../prime/prime.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PosterImagePipe } from './pipes/poster-image.pipe';

@NgModule({
  declarations: [
    MainPageComponent,
    DetailsPageComponent,
    FavouritesPageComponent,
    RootPageComponent,
    MovieCardComponent,
    MovieListComponent,
    PosterImagePipe,
  ],
  imports: [CommonModule, FormsModule, MoviesRoutingModule, PrimeModule],
})
export class MoviesModule {}
