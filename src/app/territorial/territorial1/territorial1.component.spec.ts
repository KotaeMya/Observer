import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Territorial1Component } from './territorial1.component';

describe('Territorial1Component', () => {
  let component: Territorial1Component;
  let fixture: ComponentFixture<Territorial1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Territorial1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Territorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
