import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotoringComponent } from './monotoring.component';

describe('MonotoringComponent', () => {
  let component: MonotoringComponent;
  let fixture: ComponentFixture<MonotoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonotoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonotoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
