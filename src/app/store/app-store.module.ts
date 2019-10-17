import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxDataModule } from 'ngrx-data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxDataModule.forRoot(entityConfig)
  ]
})
export class AppStoreModule { }
