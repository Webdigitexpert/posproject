import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosLeftPanelComponent } from './pos-left-panel.component';

describe('OrdersListComponent', () => {
  let component: PosLeftPanelComponent;
  let fixture: ComponentFixture<PosLeftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosLeftPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
