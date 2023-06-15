import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjxAssignComponent } from './rxjx-assign.component';

describe('RxjxAssignComponent', () => {
  let component: RxjxAssignComponent;
  let fixture: ComponentFixture<RxjxAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjxAssignComponent]
    });
    fixture = TestBed.createComponent(RxjxAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
