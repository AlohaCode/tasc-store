import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptsComponent } from './reciepts.component';

describe('RecieptsComponent', () => {
  let component: RecieptsComponent;
  let fixture: ComponentFixture<RecieptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
