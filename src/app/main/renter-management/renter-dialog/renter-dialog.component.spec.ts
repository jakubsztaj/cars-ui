import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDialogComponent } from './renter-dialog.component';

describe('RenterDialogComponent', () => {
  let component: RenterDialogComponent;
  let fixture: ComponentFixture<RenterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenterDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
