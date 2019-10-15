import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.scss']
})
export class OrderSubmitComponent implements OnInit {

    order_goods = [];

    // 收货地址
    receiver_address : any = {};

  constructor(
      private service:MainService,
      private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMyAddress();
    this.getOrderGoods();
    this.getMyTickets();
  }

    // 获取订单商品
    getOrderGoods(){
        let params = {
            "cartIds":this.route.snapshot.queryParams['cartIds'],
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"searchMyCart":params}).subscribe(res=>{
            console.log("获取订单商品",res);
            if (res['searchMyCart']) {
                this.order_goods = res['searchMyCart'];
            }
        });
    };

    // 获取我的收货地址
    getMyAddress(){
        let params = {
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        let receiverId = sessionStorage.getItem('receiverId');
        if (receiverId) {
            params["receiverId"] = receiverId;
        }else {
            params['default'] = 1;
        }
        this.service.getData({"getReceiverAdress":params}).subscribe(res=>{
            console.log("我的收货地址",res);
            if (res["getReceiverAdress"].rsp_code == 1) {
                this.receiver_address = res["getReceiverAdress"].rows[0];
            }
        });
    }

    // 我的优惠券
    getMyTickets(){
        let params = {
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"myCoupons" : params}).subscribe(res=>{
            console.log("我的优惠券",res);
        })
    }

    // 提交订单
    submitOrder(){
        let params = {
            "couponId" : "",    // 优惠券ID
            "saleTotal" : 0,    // 减免金额
            "payType" : 10,     // 支付方式
            "baks":[{"shop_id":this.order_goods['rows'][0]['sId']}],
            "orderTotal" : this.orderTotal(),               // 支付金额
            "itemTotal" : this.order_goods['total'],        // 商品总金额
            "receiveId" : this.receiver_address['receiverId'],
            "cartIds" : (this.route.snapshot.queryParams['cartIds']).split(','),
            "userId" : sessionStorage.getItem('user_id'),
            "access_token":sessionStorage.getItem('access_token')
        };
        this.service.getData({"submitOrder" : params}).subscribe(res=>{
            console.log("提交订单",res);
            if (res['submitOrder'].rsp_code == 1) {
                this.payOrder(res['submitOrder'].orderId);
            }
        })
    }

    // 计算订单总金额
    orderTotal(){
        let money = 0;
        // 遍历所有订单
        if(this.order_goods['rows']){
            for (let store of this.order_goods['rows']) {
                for (let goods of store['skuList']) {
                    money += (goods['pPrice']+10)*goods['num'];
                }
            }
        }
        return money;
    }

    // 订单付款
    payOrder(order_id){
        let params = {
            "order_id" : order_id,
            "payType" : "30",
            "user_id" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"orderPay" : params}).subscribe(res=>{
            console.log('订单付款',res);


        })
    }

    // 微信付款
    wxPay(){
        window['wx'].chooseWXPay({
            timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: '', // 支付签名随机串，不长于 32 位
            package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: '', // 支付签名
            success: function (res) {
                // 支付成功后的回调函数
            }
        });
    }
}
