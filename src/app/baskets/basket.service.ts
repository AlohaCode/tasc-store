import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Basket } from '../core/models/basket';

@Injectable({ providedIn: 'root' })
export class BasketService extends EntityCollectionServiceBase<Basket> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Basket', serviceElementsFactory);
  }
}
