import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDialogDataComponent } from './rental-dialog-data.component';

describe('RentalDialogDataComponent', () => {
  let component: RentalDialogDataComponent;
  let fixture: ComponentFixture<RentalDialogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalDialogDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
