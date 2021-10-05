import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDialogDataComponent } from './car-dialog-data.component';

describe('CarDialogDataComponent', () => {
  let component: CarDialogDataComponent;
  let fixture: ComponentFixture<CarDialogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDialogDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
