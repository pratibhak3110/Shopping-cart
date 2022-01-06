import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCartComponent } from './billing-cart.component';

describe('BillingCartComponent', () => {
  let component: BillingCartComponent;
  let fixture: ComponentFixture<BillingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
