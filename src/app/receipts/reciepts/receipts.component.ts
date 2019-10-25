import { Component, OnInit } from '@angular/core';
import { Receipt } from '../../core/models/receipt';
import { ReceiptService } from '../receipt.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  selected: Receipt;
  receipts$: Observable<Receipt[]>;
  loading$: Observable<boolean>;

  constructor( private receiptSvc: ReceiptService) {
    this.receipts$ = receiptSvc.entities$;
    this.loading$ = receiptSvc.loading$;
  }

  ngOnInit() {

  }

}
