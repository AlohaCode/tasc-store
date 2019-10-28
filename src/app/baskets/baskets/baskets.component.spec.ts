import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketsComponent } from './baskets.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BasketsService } from '../baskets.service';
import basketsArray from '../../../../cypress/fixtures/baskets.json';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('BasketsComponent', () => {
  let component: BasketsComponent;
  let fixture: ComponentFixture<BasketsComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    const basketsSvcSpy = jasmine.createSpyObj('BasketsService', ['add']);
    basketsSvcSpy.entities$ = of(basketsArray);
    basketsSvcSpy.loading$ = of(false);

    TestBed.configureTestingModule({
      declarations: [ BasketsComponent ],
      imports: [ MaterialModule, NoopAnimationsModule, RouterTestingModule ],
      providers: [
        {provide: BasketsService, useValue: basketsSvcSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all cards', () => {
    const cards = el.queryAll(By.css('.mat-card'));
    expect(cards.length).toBe(3, 'Unexpected number of cards');
  });

});
