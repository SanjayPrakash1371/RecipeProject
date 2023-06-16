import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movie: any;
  constructor(
    private movieservice: MovieserviceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.router.paramMap.subscribe((router) => {
      let movieId = router.get('id');
      this.movieservice
        .getMoviesById(movieId as string)
        .subscribe((data: any) => {
          data.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
            data.trailer
          ) as string;
          this.movie = data;
        });
    });
  }
}
