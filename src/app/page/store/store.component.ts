import { Component, OnInit, ViewChild } from '@angular/core';
import {MainService} from "../../services";
import {Images} from "../../sources";
import {ActivatedRoute} from "@angular/router";
import {IonContent} from "@ionic/angular";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

    @ViewChild("content") ionContent: IonContent;

    img = Images;
    goods : any = [];

    storeInfo : any = {};
    is_favorite = false;

    order_type = "all";
    order_by = "";
    pageSize = 5;
    loading = false;

  constructor(
      private service:MainService,
      private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStoreGoods();
    this.getStoreDetail();
  }
    //  滚动监听，滚到底部时自动加载更多
    scrollEnd(){
        this.ionContent.getScrollElement().then((res)=>{
            if (res.clientHeight == res.scrollHeight - res.scrollTop) {
                this.pageSize += 5;
                this.getStoreGoods();
            }
        });
    }

    //  排序搜索
    orderBySearch(key){
        if (this.order_type == key && key != 'listPrice') return;
        this.order_type = key;
        if (key == 'listPrice') {
            this.order_by = this.order_by == 'asc'? "Desc":"asc";
        }else {
            this.order_by = '';
        }
        this.getStoreGoods();
    }

  //  获取店铺商品
  getStoreGoods(){
      this.loading = true;
      let params = {
          "pageSize":this.pageSize,
          "currentPage":1,
          "orderType":this.order_type,
          "orderBy":this.order_by,
          "shopId" : this.route.snapshot.paramMap.get('id')
      };
      let userId = sessionStorage.getItem('user_id');
      if (userId) {params['userId'] = userId;}
      this.service.getData({"search":params}).subscribe(res=>{
          this.storeInfo = res["search"];
          this.loading = false;
      });
  }

  //  获取店铺详情
  getStoreDetail(){
      let params = {"shopId" : this.route.snapshot.paramMap.get('id')};
      this.service.getData({"getShopDetail":params}).subscribe(res=>{
          this.checkMyFavorite();
      });
  }

  //  收藏店铺
  collectStore(){
      if (this.service.checkLoggedIn()) {
          let params = {
              "sId" : this.route.snapshot.paramMap.get('id'),
              "uId" : sessionStorage.getItem('user_id'),
              "access_token" : sessionStorage.getItem('access_token')
          };
          if (!this.is_favorite) {
              this.service.getData({"favorite":params}).subscribe(res=>{
                  this.getStoreDetail();
              });
          }
      }
  }

  //  获取我收藏的店铺
    checkMyFavorite(){
        if (sessionStorage.getItem('user_id')) {
            let params = {
                "pageSize" : "10",
                "currentPage" : "1",
                "tag" : "1",        //1 获取收藏的店铺； 2 获取收藏的宝贝
                "uId" : sessionStorage.getItem('user_id'),
                "access_token" : sessionStorage.getItem('access_token')
            };
            this.service.getData({"myFavorites" : params}).subscribe(res=>{
                for (let item of res['myFavorites'].rows) {
                    if (item.sId == this.route.snapshot.paramMap.get('id')) {
                        this.is_favorite = true;
                    }
                }
            })
        }
    }

}
