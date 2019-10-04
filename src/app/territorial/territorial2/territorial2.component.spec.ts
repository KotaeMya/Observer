import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Territorial2Component } from './territorial2.component';

describe('Territorial2Component', () => {
  let component: Territorial2Component;
  let fixture: ComponentFixture<Territorial2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Territorial2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Territorial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
