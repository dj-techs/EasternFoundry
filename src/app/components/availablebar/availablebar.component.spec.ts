import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablebarComponent } from './availablebar.component';

describe('AvailablebarComponent', () => {
  let component: AvailablebarComponent;
  let fixture: ComponentFixture<AvailablebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
