import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  goodsBrowseList : any = [];

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getHistory();
  }

  // 获取浏览历史
  getHistory(){
      let params = {
        "pageSize" : 10,
        "currentPage" : 1,
        "user_id" : sessionStorage.getItem('user_id'),
        "access_token" : sessionStorage.getItem('access_token'),
      };
      this.service.getData({"goodsBrowseList":params}).subscribe(res=>{
          this.goodsBrowseList = res['goodsBrowseList'].rows;
      });
  }

  // 清空浏览历史
  clearHistory(){
      let params = {
          "user_id" : sessionStorage.getItem('user_id'),
          "access_token" : sessionStorage.getItem('access_token'),
      };
      this.service.AlertTipBox({
          header:"确认清空历史记录？",
          buttons : ['取消',{
              text : "确定",
              handler : ()=>{
                  this.service.getData({"delGoodsBrowses":params}).subscribe(res=>{

                  });
              }
          }]
      });

  }

}
