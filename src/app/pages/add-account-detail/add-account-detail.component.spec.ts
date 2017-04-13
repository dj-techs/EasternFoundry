import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountDetailComponent } from './add-account-detail.component';

describe('AddAccountDetailComponent', () => {
  let component: AddAccountDetailComponent;
  let fixture: ComponentFixture<AddAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
