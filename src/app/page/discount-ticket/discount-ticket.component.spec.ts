import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTicketComponent } from './discount-ticket.component';

describe('DiscountTicketComponent', () => {
  let component: DiscountTicketComponent;
  let fixture: ComponentFixture<DiscountTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
