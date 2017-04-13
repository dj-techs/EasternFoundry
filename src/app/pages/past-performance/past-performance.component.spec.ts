import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerformanceComponent } from './past-performance.component';

describe('PastPerformanceComponent', () => {
  let component: PastPerformanceComponent;
  let fixture: ComponentFixture<PastPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
