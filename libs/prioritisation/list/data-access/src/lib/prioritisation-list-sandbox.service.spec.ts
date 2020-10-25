import { TestBed } from '@angular/core/testing';

import { PrioritisationListSandboxService } from './prioritisation-list-sandbox.service';

describe('PrioritisationListSandboxService', () => {
  let service: PrioritisationListSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioritisationListSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
