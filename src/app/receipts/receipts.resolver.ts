import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, first, filter } from 'rxjs/operators';
import { BasketsService } from '../baskets/baskets.service';

@Injectable()
export class ReceiptsResolver implements Resolve<boolean> {

  constructor(private basketsSvc: BasketsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.basketsSvc.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            console.log('getting baskets from db');
            this.basketsSvc.getAll();
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
