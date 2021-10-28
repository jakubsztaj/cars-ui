import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManagementComponent } from './search-management.component';

describe('SearchManagementComponent', () => {
  let component: SearchManagementComponent;
  let fixture: ComponentFixture<SearchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
