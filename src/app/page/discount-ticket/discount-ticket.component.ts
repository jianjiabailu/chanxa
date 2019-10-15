import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";

@Component({
  selector: 'app-discount-ticket',
  templateUrl: './discount-ticket.component.html',
  styleUrls: ['./discount-ticket.component.scss']
})
export class DiscountTicketComponent implements OnInit {

  test_tickets = [
      {
        "store" : "本地测试优惠券",
        "amount" : "2",
        "limit" : ["满20元可用","2015-11-11至2015-11-30"]
      }, {
          "store" : "本地测试优惠券",
          "amount" : "5",
          "limit" : ["满50元可用","2015-11-11至2015-11-30"]
      }, {
          "store" : "本地测试优惠券",
          "amount" : "10",
          "limit" : ["满100元可用","2015-11-11至2015-11-30","满100元可用","2015-11-11至2015-11-30","2015-11-11至2015-11-30"]
      }
  ];

  my_tickets = [];

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMyTickets();
  }

  // 我的优惠券
  getMyTickets(){
      let params = {
          "uId" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"myCoupons" : params}).subscribe(res=>{
        this.my_tickets = res['myCoupons'].rows
      })
  }
}
