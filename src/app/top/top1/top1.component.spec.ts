import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1Component } from './top1.component';

describe('Top1Component', () => {
  let component: Top1Component;
  let fixture: ComponentFixture<Top1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
