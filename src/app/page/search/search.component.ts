import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    // 查询变量
    _search = {
        type_view : false,
        type_value : 1,
        content_view : 0,
        history : null,
        result : {}
    };

    // 查询参数
    http_params={
        "type" : 1,       // 搜索模式  1:商品 2：店铺
        "name" : "",        // 搜索关键词
        "orderType" : "all",   // 排序类型
        "orderBy" : ""     // 升序或降序
    };

  constructor(
      private service:MainService
  ) { }

  ngOnInit() {
      this.checkHistory();
  }


  // 保存查询记录
  saveHistory(){
      if (this._search.history){
          if (this._search.history.indexOf(this.http_params.name) < 0) {
              this._search.history.push(this.http_params.name);
          }
      }else {
          this._search.history = [];
          this._search.history.push(this.http_params.name);
      }
      localStorage.setItem('search_history',this._search.history.join(','));
  }

  // 条件查询
  orderBySearch(key){
      if (this.http_params.orderType == key && key != 'listPrice') return;
      this.http_params.orderType = key;
      if (key == 'listPrice') {
          this.http_params['orderBy'] = this.http_params['orderBy'] == 'asc'? "Desc":"asc";
      }else {
          this.http_params['orderBy'] = '';
      }
      this.searchData();
  }

  // 取消搜索返回上级页面
  cancel(){this.service.goBack();}

    // 搜索查询
    searchData(){
        // 查询之前先删除之前的查询
        this.http_params.type = this._search.type_value;
        this._search.result={};
        // 发送查询请求
        this.service.getData({"search" : this.http_params}).subscribe(res=>{
            if (res['search'].rsp_code == 1 && res['search'].total != 0) {
                // 保存查询的关键词
                this.saveHistory();
                this._search.content_view = 2;
                this._search.result = res['search'];
            }else {
                this._search.content_view = 3;
            }
        });
    }

    //  删除查询
    deleteSearch(){
        this.http_params.name="";
        this._search.result={};
        this._search.content_view = 1;
    }

    // 检查历史记录
    checkHistory(){
        if (localStorage.getItem('search_history')) {
            this._search.content_view = 1;
            this._search.history = (localStorage.getItem('search_history')).split(',');
        }
    }

  // 删除历史记录
  deleteHistory(){
      if (confirm('确认删除?')) {
          this._search.history = null;
          localStorage.removeItem('search_history');
      }
  }
}
