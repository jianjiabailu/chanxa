import { Component } from '@angular/core';
import {MainService} from "../../services";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  system_msg = null;
  voice = null;
  constructor(private service:MainService) { }

  // 退出登录
  logout(){
      let params = {
          "id":sessionStorage.getItem('user_id'),
          "access_token":sessionStorage.getItem('access_token')
      };
      this.service.AlertTipBox({
          header : "确定退出当前登录",
          buttons : ['取消',{
              text: '确定',
              handler: () => {
                  this.service.getData({"logout" : params}).subscribe(res=>{
                      if (res['logout'].rsp_code == 1) {
                          sessionStorage.removeItem('isLoggedIn');
                          sessionStorage.removeItem('user_id');
                          sessionStorage.removeItem('access_token');
                          this.service.router.navigate(['login']);
                      }
                  });
              }
          }]
      });

  }

}
