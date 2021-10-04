import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenterDialogContentComponent } from './renter-dialog-content.component';

describe('RenterDialogContentComponent', () => {
  let component: RenterDialogContentComponent;
  let fixture: ComponentFixture<RenterDialogContentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenterDialogContentComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
