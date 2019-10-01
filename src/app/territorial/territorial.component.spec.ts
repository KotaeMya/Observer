import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorialComponent } from './territorial.component';

describe('TerritorialComponent', () => {
  let component: TerritorialComponent;
  let fixture: ComponentFixture<TerritorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
