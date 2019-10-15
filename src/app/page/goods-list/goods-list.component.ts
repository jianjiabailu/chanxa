import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { IonContent } from '@ionic/angular';
import {MainService} from "../../services";


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit{

  @ViewChild('content') ionContent: IonContent;

  // 我的商品列表
  my_goods_list : any = [];

  // 价格筛选
  range = {
      view : false,
      value : {lower : null, upper : null}
  };

  // 排序类型
  order_type = "all";

  // 请求参数
  params = {
      "catagory_id" : this.route.snapshot.queryParams['catagoryId'] || '1',
      "brand_id" : "", "shop_id":"", "userId":"", "orderType":"", "orderBy":"",
      "price_start":0, "price_end":0, "attrs":[],"pageSize": 6, "currentPage":1,
  };

  // 滚动条Y轴坐标
  scrollY = 0;

  // 提示
  tip = 0;  // 1：没有查询到商品，2：有查询到商品，3：没有更多商品

  constructor(
      private service:MainService,
      private route:ActivatedRoute
  ) {}

    ngOnInit() {
      // 页面初始化后检查服务函数是否存在此页面的缓存数据，如果有则加载信息
      if (this.service.catch_data['goods-list']) {
          // 加载缓存数据和参数状态
          this.my_goods_list = this.service.catch_data['goods-list'].data;
          this.order_type = this.service.catch_data['goods-list'].order_type;
          this.params = this.service.catch_data['goods-list'].http_params;
          this.scrollY = this.service.catch_data['goods-list'].scrollY;
          if (this.scrollY > 0) {
              this.ionContent.scrollToPoint(0,this.scrollY);
          }
          // 加载一次后立即销毁此页面缓存
          delete this.service.catch_data['goods-list'];
      }else {
          this.getGoodsList();
      }

    }

    // 滚动监听,记录滚动条的坐标
    scrolling(){
        this.ionContent.getScrollElement().then((res)=>{
            this.scrollY = res.scrollTop;
        });
    }
    // 滚动监听，滚到底部时自动加载更多
    scrollEnd(){
        this.ionContent.getScrollElement().then((res)=>{
            if (res.clientHeight == res.scrollHeight - res.scrollTop) {
                // 判断是否存在更多数据
                if (this.tip == 3) return;
                // 添加6条数据
                this.params.pageSize += 6;
                this.getGoodsList();
            }
        });
    }

  //  获取商品列表
  getGoodsList(){
      this.service.getData({"searchGoods":this.params}).subscribe(res=>{
          // 修改网页标题
          document.title = res['searchGoods']['catagory']['catagory_name'];
          if (res['searchGoods'].total == 0) {
              this.tip = 1;
          }else if (res['searchGoods'].total > this.my_goods_list.length) {
              this.my_goods_list = res['searchGoods'].rows;
          }else {
              this.tip = 3;
          }
      });
  }

  //  排序搜索
  orderBySearch(key){
    if (this.order_type == key && key != 'listPrice') return;
    //  重新排序查询商品后，提示消失，加载更多的限制取消
    this.tip = 0;
    //  页面大小初始化
    this.params.pageSize = 6;
    //  设置排序方法
    this.params.orderType = this.order_type = key;
    // this.order_type = key;
    if (key == 'listPrice') {
      this.params.orderBy = this.params.orderBy == 'asc'? "Desc":"asc";
    }else {
      this.params.orderBy = '';
    }
    // 重新请求
    this.getGoodsList();
  }

  //  价格筛选搜索
  rangeSearch(){
      this.range.view = false;
      this.params.price_start = this.range.value.lower;
      this.params.price_end = this.range.value.upper == 999?null:this.range.value.upper;
      this.getGoodsList();
  }

  //  保存数据
  saveData(){
      this.service.catch_data['goods-list']={
          data : this.my_goods_list,
          order_type : this.order_type,
          http_params : this.params,
          scrollY : this.scrollY,
          tip : this.tip
      };
  }

}
