import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPaymentDialogComponent } from './rental-payment-dialog.component';

describe('RentalPaymentDialogComponent', () => {
  let component: RentalPaymentDialogComponent;
  let fixture: ComponentFixture<RentalPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalPaymentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
