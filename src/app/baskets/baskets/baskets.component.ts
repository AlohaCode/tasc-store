import { Component, OnInit } from '@angular/core';
import { IBasket } from '../../core/models/i-basket';
import { BasketsService } from '../baskets.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  title: string;
  selected: IBasket;
  baskets$: Observable<IBasket[]>;
  loading$: Observable<boolean>;

  constructor(
    private basketSvc: BasketsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log('basket component - data load');
    this.title = 'TASC Baskets';
    this.baskets$ = this.basketSvc.entities$;
    this.loading$ = this.basketSvc.loading$;
  }

  showReceipt(basketId: number) {
    console.log('navigating to receipt screen', basketId);
    this.router.navigate([basketId], { relativeTo: this.route });
  }

}
