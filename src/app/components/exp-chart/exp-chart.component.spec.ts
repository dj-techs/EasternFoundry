import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpChartComponentComponent } from './exp-chart-component.component';

describe('ExpChartComponentComponent', () => {
  let component: ExpChartComponentComponent;
  let fixture: ComponentFixture<ExpChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
