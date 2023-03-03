import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PaginatedMovieList } from '../../interfaces/paginated-movie-list.interface';
import { Subscription, switchMap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public paginatedMovieList!: PaginatedMovieList;
  private subscription!: Subscription;
  public query: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams
      .pipe(
        switchMap(({ query, page }) => {
          if (query) {
            return this.movieService.searchMovies(query, page);
          } else {
            return this.movieService.getPopularMovies(page);
          }
        })
      )
      .subscribe({
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

  changePage({ page }: any): void {
    const queryParams: Params = { page: page + 1 };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  search(): void {
    const queryParams = {
      query: this.query,
    };

    this.router.navigate(['/'], { queryParams });
  }
}
