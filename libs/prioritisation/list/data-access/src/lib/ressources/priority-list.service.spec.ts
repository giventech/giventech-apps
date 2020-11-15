import { TestBed } from '@angular/core/testing';

import { PriorityListService } from './priority-list.service';

describe('PriorityListService', () => {
  let service: PriorityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriorityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
