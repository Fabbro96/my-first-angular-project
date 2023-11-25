import { TestBed } from '@angular/core/testing';

import { ClickServiceService } from './click-service.service';

describe('ClickServiceService', () => {
  let service: ClickServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
