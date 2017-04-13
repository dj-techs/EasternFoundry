import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerformanceCreateComponent } from './past-performance-create.component';

describe('PastPerformanceCreateComponent', () => {
  let component: PastPerformanceCreateComponent;
  let fixture: ComponentFixture<PastPerformanceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPerformanceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPerformanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
