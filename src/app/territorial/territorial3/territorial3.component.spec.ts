import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Territorial3Component } from './territorial3.component';

describe('Territorial3Component', () => {
  let component: Territorial3Component;
  let fixture: ComponentFixture<Territorial3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Territorial3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Territorial3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
