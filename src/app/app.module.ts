import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'baskets' },
  {
    path: 'baskets',
    loadChildren: () =>
      import('./baskets/baskets.module').then(m => m.BasketsModule)
  },
  {
    path: '**', redirectTo: '/baskets'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes),
    AppStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
