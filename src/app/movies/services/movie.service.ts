import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieDetails } from '../interfaces/movie-details.interface';
import { PaginatedMovieList } from '../interfaces/paginated-movie-list.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(page: number = 1): Observable<PaginatedMovieList> {
    const params = {
      page,
      api_key: this.apiKey,
    };

    return this.httpClient.get<PaginatedMovieList>(
      this.apiUrl + '/movie/popular',
      {
        params,
      }
    );
  }

  getMovieById(id: string): Observable<MovieDetails> {
    if (!id) {
      throw new Error('Id not present');
    }

    const params = {
      api_key: this.apiKey,
    };

    return this.httpClient.get<MovieDetails>(this.apiUrl + '/movie/' + id, {
      params,
    });
  }

  searchMovies(
    query: string,
    page: number = 1
  ): Observable<PaginatedMovieList> {
    const params = {
      page,
      query,
      api_key: this.apiKey,
    };

    return this.httpClient.get<PaginatedMovieList>(
      this.apiUrl + '/search/movie',
      {
        params,
      }
    );
  }
}
