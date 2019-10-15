import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MainService} from "./services";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  constructor(
    private service:MainService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private route: ActivatedRoute,
    private titleService : Title
  ) { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    ngOnInit(){
      this.initializeApp();
      // 此处动态设置网页标题的方法跟路由复用冲突，已失效
      this.dynamicSetWebTitle();
    }

    // 动态设置网页标题
    dynamicSetWebTitle(){
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),         // 过滤出导航结束的事件
            map(() => this.route),                                      // 返回路由状态树
            map(route => {                                              // 循环遍历状态树得到最后激活的 route
                while (route.firstChild) route = route.firstChild;
                return route;
            }),
            filter(route => route.outlet === 'primary'),              // 过滤出未命名的outlet，<router-outlet>
            mergeMap(route => route.data)                               // 获取路由配置数据
        ).subscribe(event => {this.titleService.setTitle(event['title'])}); // 设置网页标题
    }

}
