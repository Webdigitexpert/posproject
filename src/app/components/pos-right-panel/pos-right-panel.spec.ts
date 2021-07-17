import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosRightPanelComponent } from './pos-right-panel';

describe('CategoryBodyComponent', () => {
  let component: PosRightPanelComponent;
  let fixture: ComponentFixture<PosRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ postMessage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
