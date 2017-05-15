import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateProfileEditComponent } from './corporate-profile-edit.component';

describe('CorporateProfileEditComponent', () => {
  let component: CorporateProfileEditComponent;
  let fixture: ComponentFixture<CorporateProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
