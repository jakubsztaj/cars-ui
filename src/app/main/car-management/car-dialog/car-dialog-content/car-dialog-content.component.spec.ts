import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDialogContentComponent } from './car-dialog-content.component';

describe('CarDialogContentComponent', () => {
  let component: CarDialogContentComponent;
  let fixture: ComponentFixture<CarDialogContentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDialogContentComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CarDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
