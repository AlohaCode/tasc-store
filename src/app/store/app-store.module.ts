import { NgModule } from '@angular/core';
import { NgrxDataModule, DefaultDataServiceConfig } from 'ngrx-data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:9000/api',
  timeout: 10000, // request timeout
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ]
})
export class AppStoreModule { }
