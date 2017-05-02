import { TestBed, inject } from '@angular/core/testing';

import { PastperformanceService } from './pastperformance.service';

describe('PastperformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastperformanceService]
    });
  });

  it('should ...', inject([PastperformanceService], (service: PastperformanceService) => {
    expect(service).toBeTruthy();
  }));
});
