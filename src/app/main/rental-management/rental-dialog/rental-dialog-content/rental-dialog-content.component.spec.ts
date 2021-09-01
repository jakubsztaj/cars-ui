import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalDialogContentComponent } from './rental-dialog-content.component';

describe('RentalDialogContentComponent', () => {
  let component: RentalDialogContentComponent;
  let fixture: ComponentFixture<RentalDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalDialogContentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
