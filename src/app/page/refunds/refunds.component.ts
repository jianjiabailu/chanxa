import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent implements OnInit {

  refund_data={
    "select" : false,
    "type" : 10,
    "reason" : 20,
    "explain" : "",
  };

  constructor(
      private service:MainService,
      private route:ActivatedRoute
  ) { }

  ngOnInit() {
      this.searchStatus();
  }

  // 申请退款
  submitRefunds(){
      let params = {
        "apply_type" : this.refund_data.type,
        "refund_cause" : this.refund_data.reason,
        "refund_bak" : this.refund_data.explain,
        "order_id":this.route.snapshot.paramMap.get('id'),
        "user_id" : sessionStorage.getItem('user_id'),
        "access_token" : sessionStorage.getItem('access_token')
      };
      console.log(params);
      this.service.getData({"orderApply" : params}).subscribe(res=>{
          console.log("申请退款",res);
          if (res['orderApply']['rsp_code']==1){
            this.service.goBack();
          }
      })
  }

  // 查询状态
    searchStatus(){
      let params = {
          "table" : "refund_bak",
          "code" : 20
      };
        this.service.getData({"searchDicts" : params}).subscribe(res=>{

        })
    }


}
