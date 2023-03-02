import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PaginatedMovieList } from '../../interfaces/paginated-movie-list.interface';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public paginatedMovieList!: PaginatedMovieList;
  private subscription!: Subscription;

  constructor(
    private movieService: MovieService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.movieService.getPopularMovies().subscribe({
      next: (paginatedMovies) => (this.paginatedMovieList = paginatedMovies),
      error: () =>
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          key: 'main-page-toast',
          detail: 'Movies not found. Please, try again.',
          sticky: true,
        }),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
