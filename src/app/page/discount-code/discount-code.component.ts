import { Component } from '@angular/core';
import {Images} from "../../sources";
import {MainService} from "../../services";

@Component({
  selector: 'app-discount-code',
  templateUrl: './discount-code.component.html',
  styleUrls: ['./discount-code.component.scss']
})
export class DiscountCodeComponent {

    img = Images;

    code = null;

    constructor(private service:MainService) { }

    // 兑换优惠券
    exchangeTickets(){
        let params = {
            "couponCode" : this.code,
            "uId" : sessionStorage.getItem('user_id'),
            "access_token" : sessionStorage.getItem('access_token')
        };
        this.service.getData({"myCouponsCode" : params}).subscribe(res=>{
            console.log("兑换优惠券",res);
        })
    }

}
