import { TestBed } from '@angular/core/testing';

import { EmrService } from './nmr.service';

describe('NmrService', () => {
  let service: EmrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
