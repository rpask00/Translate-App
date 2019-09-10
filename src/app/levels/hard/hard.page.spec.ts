import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardPage } from './hard.page';

describe('HardPage', () => {
  let component: HardPage;
  let fixture: ComponentFixture<HardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
