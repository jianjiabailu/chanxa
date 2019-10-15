import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MainService} from "../../services";

@Component({
  selector: 'app-goods-info',
  templateUrl: './goods-info.component.html',
  styleUrls: ['./goods-info.component.scss']
})
export class GoodsInfoComponent implements OnInit {


  child_views = this.route.snapshot.queryParams['view'] == 'evaluate';

  goodsimgs = null;
  goodsText = null;

  evaluates = null;

  constructor(
      private route:ActivatedRoute,
      private service:MainService
      ) { }

  ngOnInit() {
      this.getGoodsDetail();
  }
//  获取商品详情
    getGoodsDetail(){
        let params = {"goodsId" : this.route.snapshot.paramMap.get('id')};
        this.service.getData({"getFoodsDetail":params}).subscribe(res=>{
          let goodsIntro = res['getFoodsDetail'].goodsIntro;
          goodsIntro = goodsIntro.split('&&&');
          this.goodsText = goodsIntro[0];
          this.goodsimgs = goodsIntro[1].split(',');
        });
    }

    // 查询商品评价
    getGoodsEvaluate(){
        let params = {"goodsId":this.route.snapshot.paramMap.get('id')};
        this.service.getData({"getFoodsEvaluate":params}).subscribe(res=>{
            this.evaluates = res["getFoodsEvaluate"];
        });
    }
}
