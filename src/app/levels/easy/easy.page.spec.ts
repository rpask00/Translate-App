import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyPage } from './easy.page';

describe('EasyPage', () => {
  let component: EasyPage;
  let fixture: ComponentFixture<EasyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
