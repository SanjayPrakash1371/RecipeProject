import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieeditComponent } from './movieedit.component';

describe('MovieeditComponent', () => {
  let component: MovieeditComponent;
  let fixture: ComponentFixture<MovieeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieeditComponent]
    });
    fixture = TestBed.createComponent(MovieeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
