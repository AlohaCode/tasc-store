import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { IReceipt } from '../core/models/i-receipt';

@Injectable({ providedIn: 'root' })
export class ReceiptsService extends EntityCollectionServiceBase<IReceipt> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Receipt', serviceElementsFactory);
  }

}
