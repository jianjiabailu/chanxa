import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services'

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {

    // 菜单栏
    menu = [];
    // 菜单栏激活项
    menuActive = "";
    // 激活项对应的类型列表
    source = [];

  constructor(private service:MainService) { }

  ngOnInit() {
    this.getMenu();
  }

  //详细分类
  getTypes(key){
    this.menuActive = key;
    let params = {"searchFoodsType":{"level" : "2", "catagoryId" : key}};
    this.service.getData(params).subscribe(res=>{
        this.source = res['searchFoodsType'].rows;
    });
  }

  //主要分类
  getMenu(){
      let params = {"level" : "1"};
      this.service.getData({"searchFoodsType":params}).subscribe(res=>{
          this.menu = res['searchFoodsType'].rows;
          this.menuActive = res['searchFoodsType']['rows'][0].catagoryId;
          this.getTypes(this.menuActive);
      });
  }

}
