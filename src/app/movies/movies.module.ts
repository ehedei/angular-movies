import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    DetailsPageComponent,
    FavouritesPageComponent,
    RootPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
