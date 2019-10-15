import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

import { Images, Interfaces, ImgServer } from '../../sources'

import { AlertController, ActionSheetController, ToastController, PickerController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class MainService {

    imgs = Images;

    img_server = ImgServer;

    cfgs = {
        goods_list_scrollY :0
    };

    //  缓存数据
    catch_data : any = {};

  constructor(
    public http: HttpClient,
    public router: Router,
    public location: Location,
    public nav: NavController,

    public actionSheet: ActionSheetController,
    public picker: PickerController,
    public toast: ToastController,
    public alert: AlertController,
  ) { }

  // 获取数据
  getData(params:any){
      return this.http.post(Interfaces.common, params).pipe(
          tap(res => this.verifyResponse(params,res))
      );
  }

  //  跳转指定页面
  toPage(path){
      this.nav.navigateForward(path);
  }

  //  验证响应体的错误类型
  verifyResponse(params,res){
      if (this.isEmptyObj(params)) return;
      for (let key in params) {
          if (res[key]['rsp_code'] == 0){
              switch (res[key]['err_code']) {
                  case 1004 : this.reLogin();break;   //access_tokens失效，用户在其他地方登录，请重新登录
                  // case 1001 : this.ToastBox('参数非法(类型不一致)');break;
                  // case 1002 : this.ToastBox('参数page_size必须在0至50范围内');break;
                  // case 1101 : this.ToastBox('用户不存在');break;
                  // case 1102 : this.ToastBox('参数page_size必须在0至50范围内');break;
                  // case 1103 : this.ToastBox('该手机号码已被注册');break;
                  // case 1104 : this.ToastBox('该手机号码尚未被注册');break;
                  // case 1105 : this.ToastBox('非有效的验证码请求');break;
                  // case 1106 : this.ToastBox('密码不符合要求');break;
                  // case 1107 : this.ToastBox('密码不符合要求');break;
                  // case 1108 : this.ToastBox('密保回答不符合要求');break;
                  // case 1109 : this.ToastBox('未经用户授权');break;
                  // case 1110 : this.ToastBox('用户鉴权失败');break;
                  // case 1111 : this.ToastBox('code已被使用');break;
                  // case 1112 : this.ToastBox('code非法');break;
                  // case 1113 : this.ToastBox('用户尚未绑定手机');break;
                  // case 1900 : this.ToastBox('应用的接口访问权限受限');break;
                  // case 1901 : this.ToastBox('请求参数错误(必填项参数必传)');break;
                  // case 1999 : this.ToastBox('系统错误');break;
                  default : this.ToastBox(res[key]['err_msg']);break;
              }
          }
      }
  }

    //  验证是否登录
    checkLoggedIn(){
        if (!sessionStorage.getItem('user_id')) {
            this.AlertTipBox({
                header : "您还未登录，是否现在登录？",
                buttons : ['取消',{
                    text : "登录",
                    handler : ()=> this.router.navigate(['login'])
                }]
            });
            return false;
        }else {
            return true;
        }
    }

    //  判断对象是否为空
    isEmptyObj(obj){
        for (let i in obj)  return false;
        return true;
    }

    // 返回上一个页面
    goBack(){
        this.location.back();
    }

    // 重新登录
    reLogin(){
        this.ToastBox("您的账号在其他地方登录了，请重新登录");
        this.router.navigate(['login']);
    }

    /**
     * 弹出确认框，点击确认后消失
     * */
    async AlertTipBox(params){
        params['mode']='ios';
        const alert = await this.alert.create(params);
        return alert.present();
    }
    /**
     * 弹出底部选择框
     * */
    async ActionSheetBox(params) {
        params['mode']='ios';
        const actionSheet = await this.actionSheet.create(params);
        await actionSheet.present();
    };
    /**
     * 弹出提示框，点击确认后消失
     * */
    async ToastBox(msg) {
        const toast = await this.toast.create({
            message:msg,
            mode : "md",
            position : "top",
            duration : 1000,
            animated:true,
            translucent: false,
        });
        return toast.present();
    }

    /**
     * 选择器
     * */
    async PickerBox(parmas) {
        const toast = await this.picker.create(parmas);
        return toast.present();
    }

    // 微信JS-SDK接口注入配置信息
    wxConfigReady(config){
        let jsApiList = ['scanQRCode','chooseWXPay'];     // 要调用的API ：扫一扫，微信付款
        window['wx'].config({
            beta:true,                        //开启内测接口调用，注入wx.invoke方法
            debug:false,                      //关闭调试模式
            appId: config['appId'],            //AppID
            timestamp: config['timestamp'],    //时间戳
            nonceStr: config['nonceStr'],      //随机串
            signature: config['signature'],    //签名
            jsApiList: jsApiList               //所有要调用的 API 都要加到这个列表中
        });
        window['wx'].ready(function () {
            // 在这里调用 API
            let $this = this;
            window['wx'].checkJsApi({
                jsApiList: $this.jsApiList,
                success: function(res) {
                    alert(res['errMsg']);
                }
            });
        });
        window['wx'].error(function(res){
            alert(res['errMsg']);
        });
    }
    // 获取微信access_token
    getWXAccessToken(){
        if (sessionStorage.getItem('wx_access_token')) return;
        this.http.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd2cde7b4ba1cdd6b&secret=36bf00e2622336a09535701b28108718").subscribe(res=>{
            console.log(res);
            if(res['errcode'] == 40013) {
                alert(res['errmsg']);
            }else {
                sessionStorage.setItem('wx_access_token',res['access_token']);
                sessionStorage.setItem('wx_expires_in',res['expires_in']);
            }
        })
    }
    // 设置公众号菜单
    setWXMenu(){
        let params =  {
            "button":[
                {
                    "type":"click",
                    "name":"今日歌曲",
                    "key":"V1001_TODAY_MUSIC"
                },
                {
                    "name":"菜单",
                    "sub_button":[
                        {
                            "type":"view",
                            "name":"全潮商城",
                            "url":"http://www.chookr.net/wx/www/"
                        },
                        {
                            "type":"click",
                            "name":"赞一下我们",
                            "key":"V1001_GOOD"
                        }]
                }]
        };
        // 获取缓存的access_token去调用接口
        let access_token = sessionStorage.getItem('wx_access_token');
        if (!access_token) return;
        this.http.post("https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+access_token,params).subscribe(res=>{
            alert(res['errmsg']);
        })
    }

}
