import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  text = "<p>news-detail <b>works</b>!</p>";

  constructor(
      private route:ActivatedRoute,
      private service:MainService
  ) { }

  ngOnInit() {
    this.getNewsDetail();
  }
    getNewsDetail(){
        let params = {
            "id" : this.route.snapshot.paramMap.get('id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"messages":params}).subscribe(res=>{
            console.log("消息详情",res['messages']);
        });
    }
}
