import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movieedit',
  templateUrl: './movieedit.component.html',
  styleUrls: ['./movieedit.component.scss'],
})
export class MovieeditComponent {
  urlregex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  movieForm = this.fb.group({
    name: ['', [Validators.required]],
    poster: ['', [Validators.required, Validators.pattern(this.urlregex)]],
    rating: ['', [Validators.required, Validators.max(10), Validators.min(1)]],
    summary: ['', [Validators.required, Validators.minLength(10)]],
    trailer: [''],
  });

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private fb: FormBuilder,
    private movieService: MovieserviceService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {}

  id: string = '';
  ngOnInit() {
    this.arouter.paramMap.subscribe((router) => {
      let movieId = router.get('id');
      this.movieService
        .getMoviesById(movieId as string)
        .subscribe((data: any) => {
          this.id = data.id;
          this.movieForm.patchValue(data);
          //    this.presentData = data;

          // console.log(this.id);
        });
    });
  }

  onSubmit() {
    // console.log(this.newForm.status);

    // console.log(this.newForm.get('username')?.value)
    // console.log(this.newForm.get('age')?.value)
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      console.log(this.movieForm.value);

      let updated = this.movieForm;
      this.movieService
        .updateMovie(this.id, updated as any)
        .subscribe(() => this.router.navigate(['/newmovielist']));
    }
  }
  get name() {
    return this.movieForm.get('name');
  }
  get poster() {
    return this.movieForm.get('poster');
  }
  get rating() {
    return this.movieForm.get('rating');
  }
  get summary() {
    return this.movieForm.get('summary');
  }
  get trailer() {
    return this.movieForm.get('trailer');
  }
}
