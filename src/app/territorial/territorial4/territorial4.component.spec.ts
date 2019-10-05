import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Territorial4Component } from './territorial4.component';

describe('Territorial4Component', () => {
  let component: Territorial4Component;
  let fixture: ComponentFixture<Territorial4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Territorial4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Territorial4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
