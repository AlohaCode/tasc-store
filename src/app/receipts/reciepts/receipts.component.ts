import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReceiptsService } from '../receipts.service';
import { IBasket, IItem, IReceipt } from 'src/app/core';
import { Observable, Subscription } from 'rxjs';
import { BasketsService } from 'src/app/baskets/baskets.service';
import { map, tap, first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { computeTaxes } from '../../core/utils';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit, OnDestroy {

  basketId: number;
  baskets$: Observable<IBasket[]>;
  receipt$: Observable<any>;
  receiptSubscription: Subscription;
  title: string;
  receipt: IReceipt;
  taxes = 0;
  total = 0;

  constructor(
    private receiptsSvc: ReceiptsService,
    private basketsSvc: BasketsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'TASC Receipt';
    // tslint:disable-next-line: no-string-literal
    this.basketId = +this.route.snapshot.params['id'];
    this.lookInStore(this.basketId);
  }

  ngOnDestroy() {
    this.receiptSubscription.unsubscribe();
  }

  add(receipt: IReceipt) {
    this.receiptsSvc.add(receipt);
  }

  lookInStore(basketId: number) {
    this.receipt$ = this.receiptsSvc.entities$.pipe(
      map(receipts => receipts.find(rcpt => rcpt.id === basketId)),
      first()
    );
    this.receiptSubscription = this.receipt$.subscribe(receipt => {
      if (receipt) {
        this.receipt = receipt;
      } else {
        this.createReceipt(this.basketId);
      }
    });
  }

  createReceipt(basketId: number): void {
    const basketEnts$ = this.basketsSvc.entities$;
    const baskets$ = basketEnts$.pipe(
      tap(basketArry => {
        if (basketArry.length > 0) {
          const basket: IBasket = basketArry.find(bskt => bskt.id === basketId);
          if (basket) {
            const newReceipt = {
              id: basket.id,
              description: basket.description,
              items: this.processItems(basket),
              taxes: this.taxes,
              total: this.total
            } as IReceipt;
            this.receipt = newReceipt;
            this.add(newReceipt);
          }
        }
      })
    );
    baskets$.subscribe();
  }

  processItems(basket: IBasket): IItem[] {
    const items = basket.items;
    for (const item of items) {
      computeTaxes(item);
      this.taxes += item.taxes;
      this.total += item.total;
    }
    return basket.items;
  }

}
