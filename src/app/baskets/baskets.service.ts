import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { IBasket } from '../core/models/i-basket';

@Injectable({ providedIn: 'root' })
export class BasketsService extends EntityCollectionServiceBase<IBasket> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Basket', serviceElementsFactory);
  }
}
