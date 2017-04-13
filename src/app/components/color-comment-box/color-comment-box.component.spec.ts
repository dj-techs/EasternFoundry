import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCommentBoxComponent } from './color-comment-box.component';

describe('ColorCommentBoxComponent', () => {
  let component: ColorCommentBoxComponent;
  let fixture: ComponentFixture<ColorCommentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCommentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
