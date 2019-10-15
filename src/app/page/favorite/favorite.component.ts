import { Component, OnInit } from '@angular/core';
import { Images } from "../../sources";
import { MainService } from "../../services";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  my_favorite_goods : any = {};
  my_favorite_stores : any = {};

  params = {
      "tag" : "2",        //1 获取收藏的店铺； 2 获取收藏的宝贝
      "uId" : sessionStorage.getItem('user_id'),
      "access_token" : sessionStorage.getItem('access_token')
  };

  view = "2";

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMyFavoriteGoods();
    this.getMyFavoriteStores();
  }

  // 获取我的收藏的宝贝
  getMyFavoriteGoods(){
        this.params.tag = "2";
        this.service.getData({"myFavorites" : this.params}).subscribe(res=>{
            this.my_favorite_goods = res["myFavorites"];
        })
  }
    // 获取我的收藏的宝贝
    getMyFavoriteStores(){
        this.params.tag = "1";
        this.service.getData({"myFavorites" : this.params}).subscribe(res=>{
            this.my_favorite_stores = res["myFavorites"];
        })
    }

  //  取消收藏
  cancelFavorite(pId){
      this.service.AlertTipBox({
          header: '确定删除吗？',
          buttons: ['取消', {text: '确定',
              handler: () => {
                  let params = {
                      "pId" : pId, "tag" : "2",
                      "uId" : sessionStorage.getItem('user_id'),
                      "access_token" : sessionStorage.getItem('access_token')
                  };
                  this.service.getData({"delFavoriteProduct" : params}).subscribe(res=>{
                      this.getMyFavoriteGoods();
                  });
              }
          }]
      });
  }

  // 清空收藏
  clearFavorite(type:1|2){
      this.service.AlertTipBox({
          header: '确定清空吗？',
          buttons: ['取消', {text: '确定',
              handler: () => {
                  let params = {
                      "tag" : "2", "type" : type,
                      "uId" : sessionStorage.getItem('user_id'),
                      "access_token" : sessionStorage.getItem('access_token')
                  };
                  this.service.getData({"delFavoriteProduct" : params}).subscribe(res=>{
                      this.getMyFavoriteGoods();
                  });
              }
          }]
      });

  }

}
