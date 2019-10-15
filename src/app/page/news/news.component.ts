import { Component, OnInit } from '@angular/core';
import {Images} from "../../sources";
import {MainService} from "../../services";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  img = Images;

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
      let params = {
        "id" : sessionStorage.getItem('user_id'),
        "access_token" : sessionStorage.getItem('access_token')
      };
      this.service.getData({"messages":params}).subscribe(res=>{
          console.log("消息列表",res['messages']);
      });
  }
}
