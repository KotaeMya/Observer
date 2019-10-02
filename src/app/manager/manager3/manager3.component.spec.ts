import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager3Component } from './manager3.component';

describe('Manager3Component', () => {
  let component: Manager3Component;
  let fixture: ComponentFixture<Manager3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manager3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manager3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
