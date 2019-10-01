import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager1Component } from './manager1.component';

describe('Manager1Component', () => {
  let component: Manager1Component;
  let fixture: ComponentFixture<Manager1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manager1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manager1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
