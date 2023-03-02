import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainPageComponent,
      },
      {
        path: 'movie/:id',
        component: DetailsPageComponent,
      },
      {
        path: 'favourites',
        component: FavouritesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
