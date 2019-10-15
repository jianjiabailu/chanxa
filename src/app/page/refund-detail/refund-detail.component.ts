import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss']
})
export class RefundDetailComponent implements OnInit {

  refunds_apply : any = {};
  refunds_order = [];

  constructor(
      private service:MainService,
      private route:ActivatedRoute
  ) { }

  ngOnInit() {
      this.getRefundsDetail();
  }

  // 退款详情
  getRefundsDetail(){
      let params = {
          "order_id":this.route.snapshot.paramMap.get('id'),
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"searchOrderApply" : params}).subscribe(res=>{
          console.log("退款详情",res);
          this.refunds_apply = res['searchOrderApply']['apply'];
          this.refunds_order = res['searchOrderApply']['order'];
      })
  }

}
