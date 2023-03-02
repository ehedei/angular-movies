import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { MovieDetails } from '../../interfaces/movie-details.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [
    `
      pre {
        color: white;
      }
    `,
  ],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  public movie!: MovieDetails;
  private subscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.movieService.getMovieById(id)))
      .subscribe({
        next: (movie) => (this.movie = movie),
        error: () => {
          this.router.navigate(['/404']);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
