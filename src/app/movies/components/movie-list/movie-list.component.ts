import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/paginated-movie-list.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [],
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
}
