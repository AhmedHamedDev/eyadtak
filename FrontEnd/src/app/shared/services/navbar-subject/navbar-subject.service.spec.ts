import { TestBed } from '@angular/core/testing';

import { NavbarSubjectService } from './navbar-subject.service';

describe('NavbarSubjectService', () => {
  let service: NavbarSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
