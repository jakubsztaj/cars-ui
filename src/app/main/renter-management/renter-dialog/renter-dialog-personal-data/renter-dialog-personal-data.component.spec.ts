import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDialogPersonalDataComponent } from './renter-dialog-personal-data.component';

describe('RenterDialogPersonalDataComponent', () => {
  let component: RenterDialogPersonalDataComponent;
  let fixture: ComponentFixture<RenterDialogPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterDialogPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDialogPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
