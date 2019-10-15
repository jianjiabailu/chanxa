import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {MainService} from "../../services";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  my_info : any = {};

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMyInfo();
  }

    // 获取我的信息
    getMyInfo(){
        let params = {
            "id" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"personInfo":params}).subscribe(res=>{
            this.my_info = res['personInfo'];
        });
    }

}
