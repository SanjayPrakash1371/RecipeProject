import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjx-assign',
  templateUrl: './rxjx-assign.component.html',
  styleUrls: ['./rxjx-assign.component.scss'],
})
export class RxjxAssignComponent {
  searchForm = this.fb.group({
    searchField1: ['', [Validators.required]],

    searchField2: ['', [Validators.required]],
  });

  ans: any = [];
  ans2: any = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    const countryLatest = this.searchForm.get('searchField1')?.valueChanges;

    const topic = this.searchForm.get('searchField2')?.valueChanges;

    if (countryLatest && topic) {
      combineLatest({ countryLatest, topic })
        .pipe(
          switchMap((val1) =>
            timer(0, 5000).pipe(switchMap((n) => this.search(val1 as any)))
          )
        )
        .subscribe((val: any) => {
          this.ans = val['articles'];

          this.ans.map((value: any) => {
            // console.log(value['title']);

            this.ans2.push(value['title']);
          });

          console.log(this.ans2);
        });
    }
  }

  search(region: any) {
    // return this.http.get(`https://restcountries.com/v3.1/region/${region}`)

    // return this.http.get(
    //   `https://newsapi.org/v2/top-headlines?country=${region}&apiKey=bd3e4fba66af421da87ebeea03d8cd5c`
    // );

    console.log(region.topic);
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${region.countryLatest}&category=${region.topic}&apiKey=57045ba4215141b985c7bb31e2557adc`
    );
  }

  // bd3e4fba66af421da87ebeea03d8cd5c
}
