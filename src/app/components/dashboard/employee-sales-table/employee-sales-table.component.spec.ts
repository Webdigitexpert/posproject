import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalesTableComponent } from './employee-sales-table.component';

describe('EmployeeSalesTableComponent', () => {
  let component: EmployeeSalesTableComponent;
  let fixture: ComponentFixture<EmployeeSalesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSalesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
