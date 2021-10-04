import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalDialogComponent } from './rental-dialog.component';

describe('RentalDialogComponent', () => {
  let component: RentalDialogComponent;
  let fixture: ComponentFixture<RentalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
