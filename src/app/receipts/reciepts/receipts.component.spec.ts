import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiptsComponent } from './receipts.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BasketsService } from 'src/app/baskets/baskets.service';
import { ReceiptsService } from '../receipts.service';
import { DebugElement } from '@angular/core';
import basketsArray from '../../../../cypress/fixtures/baskets.json';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('ReceiptsComponent', () => {
  let component: ReceiptsComponent;
  let fixture: ComponentFixture<ReceiptsComponent>;
  let el: DebugElement;
  let receiptsSvc: ReceiptsService;
  const fakeActivatedRoute = {
    snapshot: {
      params: {
        id: '1'
      }
    }
  };

  beforeEach(async(() => {
    const basketsSvcSpy = jasmine.createSpyObj('BasketsService', ['add']);
    basketsSvcSpy.entities$ = of(basketsArray);
    const receiptsSvcSpy = jasmine.createSpyObj('ReceiptsService', ['add']);
    receiptsSvcSpy.entities$ = of([]);

    TestBed.configureTestingModule({
      declarations: [ReceiptsComponent],
      imports: [MaterialModule, NoopAnimationsModule, RouterTestingModule],
      providers: [
        { provide: BasketsService, useValue: basketsSvcSpy },
        { provide: ReceiptsService, useValue: receiptsSvcSpy },
        { provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    receiptsSvc = TestBed.get(ReceiptsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create receipt', () => {
    const cards = el.queryAll(By.css('.mat-card'));
    expect(cards.length).toBe(1, 'Receipt not added to store');
  });

});
