import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {Images} from "../../sources";

@Component({
  selector: 'app-refunds-list',
  templateUrl: './refunds-list.component.html',
  styleUrls: ['./refunds-list.component.scss']
})
export class RefundsListComponent implements OnInit {

    img = Images;

  my_orders : any;

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMyRefunds();
  }

  // 获取我的退款/售后订单
  getMyRefunds(){
    let params = {
        "status" : "-1",
        "pageSize":"10", "currentPage":"1",
        "user_id" : sessionStorage.getItem('user_id'),
        "access_token" : sessionStorage.getItem('access_token')
    };
    this.service.getData({"searchOrders" : params}).subscribe(res=>{
        console.log('退款/售后订单',res);
        this.my_orders = res['searchOrders'].rows;
    })
  }


}
