import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets/baskets.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BasketService } from './basket.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BasketsComponent }
];

@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BasketService
  ]
})
export class BasketsModule { }
