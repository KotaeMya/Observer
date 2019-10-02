import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager4Component } from './manager4.component';

describe('Manager4Component', () => {
  let component: Manager4Component;
  let fixture: ComponentFixture<Manager4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manager4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manager4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
