import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemsComponent } from './movie-items.component';

describe('MovieItemsComponent', () => {
  let component: MovieItemsComponent;
  let fixture: ComponentFixture<MovieItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemsComponent]
    });
    fixture = TestBed.createComponent(MovieItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
