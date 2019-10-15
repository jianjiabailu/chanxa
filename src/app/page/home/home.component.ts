import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // swiper轮播参数
  slideOpts = {
      loop : true,  // 图片循环
      autoplay : true,  //自动轮播
      speed : 1000,     //轮播速度
      effect: 'horizontal',
      autoplayDisableOnInteraction : true
  };

  //  banner轮播图
  banner : any;

  // 主题街大/中/小图
  themes : [1,2,3,4];
  theme_md : any;
  theme_sm : any;

  constructor(private service:MainService) { }

  ngOnInit() {
    
  }

  // 获取主题
  getTheme(){
    let params = {"param": ""};
    this.service.getData({"theme":params}).subscribe(res=>{
      this.theme_sm = res['theme']['rows'][0]['rows'];
      this.theme_md = (this.theme_sm).splice(0,3);
      this.theme_lg = (this.theme_md).splice(0,1);
    });
  }

  // 获取首页广告banner图
  getAdBanner(){
      let params = {"param": ""};
      this.service.getData({"advertisement":params}).subscribe(res=>{
          this.banner = res['advertisement'].rows;
      });
  }

    // // 扫描二维码
    // scanQRCode(){
    //     // 通过userID请求我的设备信息
    //     let $this = this;
    //     window['wx'].scanQRCode({
    //         needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    //         scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    //         success: function (res) {
    //             // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果\
    //             alert(res.resultStr);
    //         },
    //         fail: function () {             // 接口调用失败时执行的回调函数
    //             alert("接口调用失败");
    //         },
    //         cancel: function () {            // 用户点击取消时的回调函数
    //             alert("您取消了，正在返回");
    //         }
    //     });
    // }


}
