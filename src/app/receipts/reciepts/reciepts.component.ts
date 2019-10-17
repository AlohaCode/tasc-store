import { Component, OnInit } from '@angular/core';
import { Receipt } from '../../core/models/receipt';
import { ReceiptService } from '../receipt.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reciepts',
  templateUrl: './reciepts.component.html',
  styleUrls: ['./reciepts.component.css']
})
export class RecieptsComponent implements OnInit {
  selected: Receipt;
  receipts$: Observable<Receipt[]>;
  loading$: Observable<boolean>;

  constructor( private receiptSvc: ReceiptService) {
    this.receipts$ = receiptSvc.entities$;
    this.loading$ = receiptSvc.loading$;
  }

  ngOnInit() {
    this.getReceipts();
  }

  add(receipt: Receipt) {
    this.receiptSvc.add(receipt);
  }

  delete(receipt: Receipt) {
    this.receiptSvc.delete(receipt);
    this.close();
  }

  getReceipts() {
    this.receiptSvc.getAll();
    this.close();
  }

  update(receipt: Receipt) {
    this.receiptSvc.update(receipt);
  }

  close() {
    this.selected = null;
  }

  select(receipt: Receipt) {
    this.selected = receipt;
  }

}
