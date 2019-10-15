import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPage } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesPage;
  let fixture: ComponentFixture<PagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
