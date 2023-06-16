import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup } from '@angular/forms';
import { catchError, concatMap, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieserviceService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http
      .get('https://648a951717f1536d65e94e9e.mockapi.io/movies')
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  getMoviesById(id: string) {
    return this.http
      .get(`https://648a951717f1536d65e94e9e.mockapi.io/movies/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }

  deleteMovie(id: string) {
    console.log('Delete Movie', id);

    return this.http
      .delete(`https://648a951717f1536d65e94e9e.mockapi.io/movies/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        }),
        // switchMap((x) => this.getMovies()) // cant take two request so change it into concatmap
        concatMap((x) => this.getMovies())
      );
  }
  trackByFunction(index: number, m: any) {
    // console.log(m.id);
    return m.id;
  }

  addMovie(formGroup: FormGroup) {
    console.log('In add Movie', formGroup.value);

    return this.http
      .post(
        `https://648a951717f1536d65e94e9e.mockapi.io/movies/`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
        // switchMap((x) => this.getMovies()) // cant take two request so change it into concatmap
        // concatMap((x) => this.getMovies())
      );
  }

  updateMovie(id: string, formGroup: FormGroup) {
    console.log('In updating', formGroup.value);

    console.log(formGroup);

    return this.http
      .put(
        `https://648a951717f1536d65e94e9e.mockapi.io/movies/${id}`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
}
