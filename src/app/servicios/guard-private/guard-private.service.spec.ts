import { TestBed } from '@angular/core/testing';

import { GuardPrivateService } from './guard-private.service';

describe('GuardPrivateService', () => {
  let service: GuardPrivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPrivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
