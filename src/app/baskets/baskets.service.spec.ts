import { async, TestBed, inject } from '@angular/core/testing';
import { BasketsService } from './baskets.service';

xdescribe('BasketsService', () => {

  beforeEach(async(() => TestBed.configureTestingModule({
    providers: [ BasketsService ]
  })));

  it('should be created', inject([BasketsService], (basketsSvc: BasketsService) => {
    expect(basketsSvc).toBeTruthy();
  }));

});
