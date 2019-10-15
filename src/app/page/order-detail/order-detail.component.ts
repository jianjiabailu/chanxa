import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

    // 订单详情
    orderDetail = {};

  constructor(
      private route:ActivatedRoute,
      private service:MainService
  ) { }

  ngOnInit() {
    this.getOrderDetail();
    console.log(window);
  }


  // 获取订单详情
  getOrderDetail(){
    let params = {
      "order_id":this.route.snapshot.paramMap.get('id'),
      "user_id":sessionStorage.getItem('user_id'),
      "access_token":sessionStorage.getItem('access_token')
    };
    this.service.getData({"searchOrder" : params}).subscribe(res=>{
      this.orderDetail = res['searchOrder']['order'];
    })
  }

    //  订单付款
    payOrder(){
        let params = {
            "order_id" : this.orderDetail['order_id'],
            "payType" : "30",
            "user_id" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"orderPay" : params}).subscribe(res=>{
            console.log('订单付款',res);
        })
    }

    //  取消订单
    concelOrder(){
        let params = {
            "order_id": this.orderDetail['order_id'],
            "user_id": sessionStorage.getItem('user_id'),
            "access_token": sessionStorage.getItem('access_token')
        };
        this.service.getData({"orderCancel": params}).subscribe(res => {
            if (res['orderCancel'].rsp_code == 1) {
                this.getOrderDetail();
            }
        })
    }

    // 请求微信配置参数
    getWXConfig(){
      let params = {

      };
      this.service.getData({"wxConfig" : params}).subscribe(res=>{
          if (res['wxConfig'].rsp_code == 1){
              this.wxConfigReady(res['wxConfig']);
          }
      })
    }

    // 微信配置验证
    wxConfigReady(config){
        // 通过config接口注入权限验证配置
        window['wx'].config({
            beta:true,//开启内测接口调用，注入wx.invoke方法
            debug:false,//关闭调试模式
            appId: config['appid'],//AppID
            timestamp: config['timestamp'],    //时间戳
            nonceStr: config['noncestr'],      //随机串
            signature: config['sign'],    //签名
            jsApiList: ['chooseWXPay']       // 所有要调用的 API 都要加到这个列表中
        });
        // 通过ready接口处理成功验证
        window['wx'].ready(function () {
            // 在这里调用 API
            let $this = this;
            window['wx'].checkJsApi({
                jsApiList: $this.jsApiList,
                success: function(res) {
                    alert(res['errMsg']);
                    $this.wxPay(config);
                }
            });
        });
        // 通过error接口处理失败验证
        window['wx'].error(function(res){
            alert(res['errMsg']);
        });
    }

    // 调用微信付款接口
    wxPay(config){
        let $this = this;
        window['wx'].chooseWXPay({
            timestamp: config['timestamp'], // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: config['noncestr'], // 支付签名随机串，不长于 32 位
            package: config['config'], // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: config['paySign'], // 支付签名
            success: function (res) {
                // 支付成功后的回调函数
                alert('支付成功'+res.toString());
                // 支付成功后返回
                $this.service.goBack();
            }
        });
    }
}
