import { TestBed } from '@angular/core/testing';

import { AsyncAwaitService } from './async-await.service';

describe('AsyncAwaitService', () => {
  let service: AsyncAwaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncAwaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
