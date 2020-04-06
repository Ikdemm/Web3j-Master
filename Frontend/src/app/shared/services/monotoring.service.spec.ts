import { TestBed, inject } from '@angular/core/testing';

import { MonotoringService } from './monotoring.service';

describe('MonotoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonotoringService]
    });
  });

  it('should be created', inject([MonotoringService], (service: MonotoringService) => {
    expect(service).toBeTruthy();
  }));
});
