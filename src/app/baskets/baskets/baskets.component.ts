import { Component, OnInit } from '@angular/core';
import { Basket } from '../../core/models/basket';
import { BasketService } from '../basket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  title: string;
  selected: Basket;
  baskets$: Observable<Basket[]>;
  loading$: Observable<boolean>;

  constructor( private basketSvc: BasketService ) {
    this.title = 'TASC Baskets';
    this.baskets$ = basketSvc.entities$;
    this.loading$ = basketSvc.loading$;
  }

  ngOnInit() {
    this.getBaskets();
  }

  add(basket: Basket) {
    this.basketSvc.add(basket);
  }

  delete(basket: Basket) {
    this.basketSvc.delete(basket);
    this.close();
  }

  getBaskets() {
    this.basketSvc.getAll();
    this.close();
  }

  update(basket: Basket) {
    this.basketSvc.update(basket);
  }

  close() {
    this.selected = null;
  }

  select(basket: Basket) {
    this.selected = basket;
  }

}
