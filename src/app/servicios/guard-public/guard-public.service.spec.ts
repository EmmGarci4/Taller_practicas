import { TestBed } from '@angular/core/testing';

import { GuardPublicService } from './guard-public.service';

describe('GuardPublicService', () => {
  let service: GuardPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
