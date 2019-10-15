import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent {

    evaluate = {
        "comment_content" : "",
        "service_score" : 0,
        "product_score" : 0,
        "logistics_score" : 0,
    };

  constructor(
      private route:ActivatedRoute,
      private service:MainService
  ) { }

    //  订单评价
    evaluateOrder(){
        let params = {
            "order_id" : this.route.snapshot.paramMap.get('id'),
            "sku_id" : this.route.snapshot.queryParams['sku_id'],
            "comment_content" : this.evaluate.comment_content,
            "service_score" : this.evaluate.service_score,
            "product_score" : this.evaluate.service_score,
            "logistics_score" : this.evaluate.logistics_score,
            "user_id" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"orderComment" : params}).subscribe(res=>{
            console.log('订单评价',res);
            if (res['orderComment'].rsp_code == 1){
                this.service.goBack();
            }
        })
    }
}
