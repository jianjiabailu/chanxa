import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../../services";
import { Area } from '../../sources';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{

    btn_content = "添加";

    // 收货地址
    my_address = {};

    // 省市区列表
    areas_list = {
        province : Area,
        city : [],
        county : [],
        selected_province : null,
        selected_city : null,
        selected_county : null
    };

    constructor(
        private service:MainService,
        private route:ActivatedRoute,
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.queryParams['receiverId'];
        if (id) {
            this.getMyAddress(id);
            this.btn_content="保存";
        }else {
            this.initData(1001,100101,10010101);
        }
    }

    // 选择省市区时自动刷新下一级的数据
    async areaSelect(grade){
        let dataCatch = null;
        switch (grade) {
            case "province" :
                dataCatch = this.getAreaDatas(this.areas_list.selected_province,Area);
                this.areas_list.city = await dataCatch.child;
                this.areas_list.selected_city = dataCatch.child[0].code;
                break;
            case "city" :
                dataCatch = this.getAreaDatas(this.areas_list.selected_city,Area);
                this.areas_list.county = await dataCatch.child;
                this.areas_list.selected_county = dataCatch.child[0].code;
                break;
            default : break;
        }
    }

    // 根据编号通过回溯算法查询数据
    getAreaDatas(code,data){
        for (let item of data) {
            if (code.toString().indexOf(item.code.toString()) == 0){
                if (item.code == code) {
                    return item;
                }else {
                    return this.getAreaDatas(code,item.child);
                }
            }
        }
    }

    // 根据ID获取收货地址
    getMyAddress(receiverId){
        let params = {
            "receiverId" : receiverId,
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"getReceiverAdress":params}).subscribe( res=>{
            console.log("我的收货地址",res);
            if (res['getReceiverAdress'].rsp_code == 1) {
                this.my_address = res["getReceiverAdress"].rows[0];
                this.initData(this.my_address['province'],this.my_address['city'],this.my_address['county']);
            }
        })
    }

    async initData(provinceCode,cityCode,countyCode){
        let cityCatch = await this.getAreaDatas(provinceCode,Area);
        let countyCatch = await this.getAreaDatas(cityCode,Area);
        this.areas_list.selected_province = provinceCode;
        this.areas_list.city = await cityCatch.child;
        this.areas_list.selected_city = cityCode;
        this.areas_list.county = await countyCatch.child;
        this.areas_list.selected_county = countyCode;
    }

    // 更新我的收货地址
    updateAddress(){
        let params = {
            "tag" : this.route.snapshot.queryParams['receiverId']?"2":"1",   // 1 为添加，2 为修改
            "receiverId": this.route.snapshot.queryParams['receiverId']||"",
            "receiverName":this.my_address['receiverName'],
            "mobile":this.my_address['mobile'],
            "province" : this.areas_list.selected_province,
            "city" : this.areas_list.selected_city,
            "county" : this.areas_list.selected_county,
            "receiverAddress":this.my_address['receiverAdress'],
            "uId":sessionStorage.getItem('user_id'),
            "access_token":sessionStorage.getItem('access_token')
        };
        this.service.getData({"updateReceiverAdress" : params}).subscribe(res=>{
            console.log("更新收货地址",res);
            if (res['updateReceiverAdress'].rsp_code == 1) {
                this.service.goBack();
            }
        });
    }

}
