import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { MainService } from "../../services";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @ViewChild('content') ionContent: IonContent;

  // 滚动条坐标
  scrollY = 0;

  // 我的订单列表
  my_orders = [];

    /**
     * 订单状态
     * 10	待付款
     * 20	等待发货
     * 30	等待收货
     * 40	交易成功
     * 50	交易关闭
    **/
    status = this.route.snapshot.queryParams['status']?parseInt(this.route.snapshot.queryParams['status']):0;

  constructor(
      private route:ActivatedRoute,
      private service:MainService
  ) { }

  ngOnInit() {
      // 页面初始化后检查服务函数是否存在此页面的缓存数据，如果有则加载信息
      if (this.service.catch_data['order-list']) {
          // 加载缓存数据和参数状态
          this.my_orders = this.service.catch_data['order-list'].data;
          this.status = this.service.catch_data['order-list'].status;
          this.scrollY = this.service.catch_data['order-list'].srollY;
          if (this.scrollY > 0) {
              this.ionContent.scrollToPoint(0,this.scrollY,200);
          }
          // 加载一次后立即销毁此页面缓存
          delete this.service.catch_data['order-list'];
      }else {
          this.getMyOrders();
      }
  }

  // 获取订单列表
  getMyOrders(status=this.status){
      this.status = status;
      let params = {
          "status" : this.status,
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"searchOrders" : params}).subscribe(res=>{
          this.my_orders = res['searchOrders'].rows;
      })
  }

  //  取消订单
  concelOrder(order_id){
      let params = {
          "order_id": order_id,
          "user_id": sessionStorage.getItem('user_id'),
          "access_token": sessionStorage.getItem('access_token')
      };
      this.service.getData({"orderCancel": params}).subscribe(res => {
        this.getMyOrders();
      })
  }

  //  确认收货
  confirmOrder(){
      let params = {
          "order_id" : "",
          "user_id" : sessionStorage.getItem('user_id')
      };
      this.service.getData({"orderArrive" : params}).subscribe(res=>{
        this.getMyOrders();
      })
  }

  //  删除订单
  deleteOrder(orderId){
      let params = {
          "order_id" : orderId,
          "type" : "1",
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"orderDel" : params}).subscribe(res=>{
          if (res['orderDel'].rsp_code == 1) {
              this.getMyOrders();
          }
      })
  }

  //  订单付款
  payOrder(order_id){
      let params = {
          "order_id" : order_id,
          "payType" : "30",
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"orderPay" : params}).subscribe(res=>{
          this.wxConfigReady(res['orderPay']);
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
          beta:true,                        //开启内测接口调用，注入wx.invoke方法
          debug:false,                      //关闭调试模式
          appId: config['appid'],            //AppID
          timestamp: config['timestamp'],    //时间戳
          nonceStr: config['noncestr'],      //随机串
          signature: config['sign'],         //签名
          jsApiList: ['chooseWXPay']         // 所有要调用的 API 都要加到这个列表中
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

  //  确认收货
  confirmReceipt(order_id){
      let params = {
          "order_id" : order_id,
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"orderArrive" : params}).subscribe(res=>{
          this.getMyOrders();
      })
  }

    // 滚动监听,记录滚动条的坐标
    scrolling(){
        // 实时记录滚动条的坐标
        this.ionContent.getScrollElement().then((res)=>{
            this.scrollY = res.scrollTop;
        });
    }
    // 滚动结束
    scrollEnd(){
        this.ionContent.getScrollElement().then((res)=>{});
    }

    // 保存数据，在点击订单进入详情页时保存组件信息，以便在返回订单列表页时记载，恢复到之前的状态
    saveData(){
      this.service.catch_data['order-list'] = {
          data : this.my_orders,
          status : this.status,
          srollY : this.scrollY
      };
    }
}
