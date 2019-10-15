import { Component, OnInit } from '@angular/core';
import { Images } from '../../sources'
import {MainService} from "../../services";

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit {

    img = Images;

    // 代付款订单
    selected:any = [];

    //  编辑购物车
    editor = {"on-off" : false, "arr" : []};

    // 我的购物车
    my_cart : any = [];

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMyCart();
  }

  // 获取我的购物车
  getMyCart(){
      let params = {
          "uId" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"searchMyCart" : params}).subscribe(res=>{
          this.my_cart = res['searchMyCart']['rows'];
      })
  }

  // 修改我的购物车
  editCart(){
    this.editor['on-off'] = false;
    let params = {
        "arr":[],
        "uId" : sessionStorage.getItem('user_id'),
        "access_token" : sessionStorage.getItem('access_token')
    };
    for (let m in this.my_cart) {
        for (let n in this.my_cart[m]['skuList']){
            let item_arr = {
                "skuId":this.my_cart[m]['skuList'][n]['pId'],
                "nums":this.my_cart[m]['skuList'][n]['num']
            };
            if (this.editor.arr.indexOf(item_arr.skuId)>=0){
                params.arr.push(item_arr);
            }
        }
    }
    if (params.arr.length > 0) {
        this.service.getData({"editMyCart" : params}).subscribe(res=>{
            console.log("修改我的购物车",res);
            this.getMyCart();
        });
    }
  }

  // 删除购物车的商品
  deleteCart(pId,evt){
      evt.stopPropagation();
      this.service.AlertTipBox({
          header: '确定删除吗？',
          buttons: ['取消', {text: '确定',
              handler: () => {
                  let params = {
                      "pId" : pId, "tag" : "1",
                      "uId" : sessionStorage.getItem('user_id'),
                      "access_token" : sessionStorage.getItem('access_token')
                  };
                  this.service.getData({"delFavoriteProduct" : params}).subscribe(res=>{
                      console.log("删除购物车的商品",res);
                      if (res['delFavoriteProduct'].rsp_code == 1) {
                          this.getMyCart();
                      }
                  });
              }
          }]
      });
  }

  // 清空购物车
  clearCart(){
      // 删除商品的goodsId
      let delete_goodsId = [];
      // 遍历所有订单
      for (let store of this.my_cart) {
          for (let goods of store['skuList']) {
              if (goods['selected']) {
                  delete_goodsId.push(goods['pId']);
              }
          }
      }
      let params = {
          "pId" : delete_goodsId.join(','), "tag" : "1",
          "uId" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.AlertTipBox({
          header : "确认删除？",
          buttons : ["取消",{
              text : "确定",
              handler : ()=>{
                  this.service.getData({"delFavoriteProduct" : params}).subscribe(res=>{
                      if (res['delFavoriteProduct'].rsp_code == 1) {
                          this.getMyCart();
                      }
                  });
              }
          }]
      })

  }

  // 选择商品
  selectGoods(selectType:'goodsItem'|'goodsGroup'|'all',data,evt){
      if (selectType == 'goodsItem') {
          data['selected'] = evt.target.checked;
      }else if (selectType == 'goodsGroup') {
          for (let item of data.skuList) {
              item['selected'] = evt.target.checked;
          }
      }else if (selectType == 'all') {
          for (let list of data) {
              for (let item of list.skuList) {
                  item['selected'] = evt.target.checked;
              }
          }
      }
  }

  // 是否已选择
  isSelectedGoods(type:'store'|'all',data){
      let result = true;
      if (type == "store") {
          for (let i in data.skuList) {
              result = result && data.skuList[i]['selected'];
          }
      }else if (type == "all") {
          for (let i in data) {
              for (let j in data[i].skuList) {
                  result = result && data[i].skuList[j]['selected'];
              }
          }
      }
      return result;
  }

  // 是否已全选
  // isSelectAll(){
  //     let result = true;
  //     // 遍历所有订单
  //     for (let i in this.my_cart) {
  //         for (let j in this.my_cart[i].skuList) {
  //             result = result && (this.selected.indexOf(this.my_cart[i].skuList[j]) >= 0);
  //         }
  //     }
  //     return result;
  // }

  // 是否已选择该分组
  // isSelectGroup(group){
  //     let result = true;
  //     // 遍历所有订单
  //     for (let i in group.skuList) {
  //         result = result && (this.selected.indexOf(group.skuList[i]) >= 0);
  //     }
  //     return result;
  // }

  // 计算已选择商品的总价
  calculate(){
      let money = 0;
      // 遍历所有订单
      for (let store of this.my_cart) {
          for (let goods of store['skuList']) {
              if (goods['selected']) {
                  money += goods['pPrice']*goods['num'];
              }
          }
      }
      return money;
  }

  // 立即购买
  buyNow(){
      let selected_goods = [];
      let storeId = null;
      // 遍历出所有订单中的店铺
      for (let store of this.my_cart) {
          // 遍历出订单中每个店铺的商品
          for (let goods of store['skuList']) {
              // 遍历出已选择的商品
              if (goods['selected']) {
                  if (storeId != null && storeId != goods['sId']) {
                      console.error('一个订单只能购买同一家店铺的商品');
                      return;
                  }
                  storeId = goods['sId'];
                  selected_goods.push(goods['cartId']);
              }
          }
      }
      this.service.router.navigate(['pages/orderSubmit'],{ queryParams: { cartIds: selected_goods.join(',') } });
  }

  // 提交订单
    submitOrder(){
        let params = {
            "couponId" : "",    // 优惠券ID
            "saleTotal" : 0,    // 减免金额
            "payType" : 10,     // 支付方式
            "baks":[{"shop_id":""}],
            "orderTotal" : "",    // 支付金额
            "itemTotal" : "",        // 商品总金额
            "receiveId" : "",        // 收货地址
            "cartIds" : "",         // 订单商品项的ID集合
            "userId" : sessionStorage.getItem('user_id'),
            "access_token":sessionStorage.getItem('access_token')
        };
        this.service.getData({"submitOrder" : params}).subscribe(res=>{
            console.log("提交订单",res);
        })
    }

  // 步进器
  count(item,isAdd,evt){
      evt.stopPropagation();
      if (this.editor['on-off']) {
          item.num = isAdd ? item.num+1 : item.num-1;
          item.num = item.num<=0 ? 1 : item.num;
          if (this.editor.arr.indexOf(item.pId)<0){
              this.editor.arr.push(item.pId);
          }
      }else {
          this.service.ToastBox("请打开编辑按钮");
      }
  }

}

