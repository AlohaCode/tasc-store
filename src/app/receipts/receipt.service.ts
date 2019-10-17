import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Receipt } from '../core/models/receipt';

@Injectable({ providedIn: 'root' })
export class ReceiptService extends EntityCollectionServiceBase<Receipt> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Receipt', serviceElementsFactory);
  }
}
