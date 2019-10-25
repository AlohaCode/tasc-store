import { TestBed } from '@angular/core/testing';

import { BasketsService } from './baskets.service';

describe('BasketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketsService = TestBed.get(BasketsService);
    expect(service).toBeTruthy();
  });
});
