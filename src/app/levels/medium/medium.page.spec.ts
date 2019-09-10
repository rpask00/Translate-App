import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPage } from './medium.page';

describe('MediumPage', () => {
  let component: MediumPage;
  let fixture: ComponentFixture<MediumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
