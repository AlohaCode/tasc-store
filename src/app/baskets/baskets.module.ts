import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets/baskets.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BasketsService } from './baskets.service';
import { BasketsResolver } from './baskets.resolver';
import { ReceiptsService } from '../receipts/receipts.service';
import { ReceiptsComponent } from '../receipts/reciepts/receipts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BasketsComponent,
    resolve: {
      baskets: BasketsResolver
    }
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: ReceiptsComponent,
    resolve: {
      baskets: BasketsResolver
    }
  }
];

@NgModule({
  declarations: [
    BasketsComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BasketsService,
    ReceiptsService,
    BasketsResolver
  ]
})
export class BasketsModule { }
