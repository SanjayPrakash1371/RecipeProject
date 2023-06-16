import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, concatMap, switchMap } from 'rxjs';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss'],
})
export class MovieItemsComponent {
  movies = [];

  constructor(
    private http: HttpClient,
    private movieService: MovieserviceService
  ) {}

  movies$: any;

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
    // this.http.get('https://648a951717f1536d65e94e9e.mockapi.io/movies').subscribe((val:any)=>{

    // this.movies=val;
    //   console.log(val);
    // })
    // this.movies$ = this.getMovies();
    // this.movies$ = this.http
    //   .get('https://648a951717f1536d65e94e9e.mockapi.io/movies')
    //   .pipe(
    //     catchError((err) => {
    //       console.log(err);

    //       return [];
    //     })
    //   );
  }

  // getMovies() {
  //   return this.http
  //     .get('https://648a951717f1536d65e94e9e.mockapi.io/movies')
  //     .pipe(
  //       catchError((err) => {
  //         console.log(err);

  //         return [];
  //       })
  //     );
  // }

  deleteMovie(id: string) {
    this.movies$ = this.movieService.deleteMovie(id);
    // console.log('Delete Movie', id);

    // this.movies$ = this.http
    //   .delete(`https://648a951717f1536d65e94e9e.mockapi.io/movies/${id}`)
    //   .pipe(
    //     catchError((err) => {
    //       console.log(err);

    //       return [];
    //     }),
    //     // switchMap((x) => this.getMovies()) // cant take two request so change it into concatmap
    //     concatMap((x) => this.getMovies())
    //   );
  }
  trackByFunction(index: number, m: any) {
    // console.log(m.id);
    return m.id;
  }
}
