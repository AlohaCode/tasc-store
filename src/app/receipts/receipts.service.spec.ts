import { TestBed } from '@angular/core/testing';
import { ReceiptsService } from './receipts.service';

describe('ReceiptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptsService = TestBed.get(ReceiptsService);
    expect(service).toBeTruthy();
  });
});
