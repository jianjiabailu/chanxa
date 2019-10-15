import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Images } from "../../sources";
import { MainService } from "../../services";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

    img = Images;
    constructor(
        private route:ActivatedRoute,
        private service:MainService,
        private location: Location
    ) { }



    my_addresses : any = [];

    default_address : any = null;
    ngOnInit() {
        this.getMyAddress();
        this.getMyAddress(true);
    }

    // 是否默认地址
    isDefault(addressItem){
        if (addressItem && this.default_address) {
            return addressItem.receiverId==this.default_address.receiverId;
        }
    }

    // 获取我的收货地址
    getMyAddress(isDefault:boolean = false){
        let params = {
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        if (isDefault) { params['default'] = 1}
        this.service.getData({"getReceiverAdress":params}).subscribe(res=>{
            if (isDefault) {
                this.default_address = res["getReceiverAdress"].rows[0];
                console.log("默认收货地址",this.default_address);
            }else {
                this.my_addresses = res["getReceiverAdress"].rows;
                console.log("我的收货地址",this.my_addresses);
            }
        })
    }

    // 删除收货地址
    deleteAddress(receiverId){
        let params = {
            "receiverId" : receiverId,
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"delReceiverAdress":params}).subscribe(res=>{
            this.getMyAddress();
            console.log("删除收货地址",res);
        })

    }

    // 选择收货地址
    selectAddress(address){
        let type = this.route.snapshot.queryParams['type'];
        if (type == "select"){
            sessionStorage.setItem('receiverId',address.receiverId);
            this.location.back();
        }
    }

    // 设置默认地址
    setDefaultAddress(addressItem){
        let params = {
            "receiverId" : addressItem.receiverId,
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"setReceiverAdress":params}).subscribe(res=>{
            this.default_address = addressItem;
            console.log("设置默认收货地址",res);
        })
    }

}
