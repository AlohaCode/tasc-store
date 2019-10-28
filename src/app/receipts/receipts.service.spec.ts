import { TestBed, async, inject } from '@angular/core/testing';
import { ReceiptsService } from './receipts.service';

xdescribe('ReceiptService', () => {

  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [ ReceiptsService ]
  })));

  it('should be created', inject([ReceiptsService], (receiptsSvc: ReceiptsService) => {
    expect(receiptsSvc).toBeTruthy();
  }));

});
