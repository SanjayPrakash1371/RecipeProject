import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjxExampleComponent } from './rxjx-example.component';

describe('RxjxExampleComponent', () => {
  let component: RxjxExampleComponent;
  let fixture: ComponentFixture<RxjxExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjxExampleComponent]
    });
    fixture = TestBed.createComponent(RxjxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
