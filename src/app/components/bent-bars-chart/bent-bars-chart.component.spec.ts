import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BentBarsChartComponent } from './bent-bars-chart.component';

describe('BentBarsChartComponent', () => {
  let component: BentBarsChartComponent;
  let fixture: ComponentFixture<BentBarsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BentBarsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BentBarsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
