import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { IonContent } from '@ionic/angular';
import { Images } from "../../sources";
import { MainService } from "../../services";

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.scss']
})
export class GoodsDetailComponent implements OnInit {

    @ViewChild('scrollBox') ionContent: IonContent;
    @ViewChild('header') dom_header;
    @ViewChild('goods') dom_goods;
    @ViewChild('stores') dom_stores;
    @ViewChild('evaluate') dom_evaluate;
    @ViewChild('details') dom_details;

    active_num = 0;

    header_opacity = 0;

    // banner图
    banner = Images.banner;

    // 商品详情
    goodsDetail :any = {};

    // 规格属性
    attr : any = [];

    // 商品评价
    evaluates : any = {};

    // 店铺信息
    store_info : any = {};

    //  属性选择窗口的高度
    attr_window = false;

    // 已选择的商品属性
    selected_attr = {
        "attr" : {},
        "attrChar" : [],
        "amounts" : 1,
        "type" : ""
    };

    intro_imgs = null;
    intro_text = null;

    status = null;

    constructor(
      private route:ActivatedRoute,
      private router:Router,
      private service:MainService
    ) {}

    ngOnInit() {
        // 监听路由
        this.router.events.subscribe(event => {
            this.status = this.route.snapshot.queryParams['status']
        });
        this.getGoodsDetail();
    }

    //  获取商品详情
    getGoodsDetail(){
      let params = {"goodsId" : this.route.snapshot.paramMap.get('id')};
      this.service.getData({"getFoodsDetail":params}).subscribe(res=>{
          this.goodsDetail = res['getFoodsDetail'];
          let goodsIntro = (res['getFoodsDetail'].goodsIntro).split('&&&');
          this.intro_text = goodsIntro[0];
          this.intro_imgs = goodsIntro[1]?goodsIntro[1].split(','):[];

          this.getStoreInfo();
          this.getGoodsEvaluate();
          this.checkMyFavorite();
      });
    }

    //  获取店铺信息
    getStoreInfo(){
        let params = {
            "shopId" : this.goodsDetail.shopId,
            "userId" : sessionStorage.getItem('user_id')
        };
        this.service.getData({"getShopDetail":params}).subscribe(res=>{
            this.store_info = res['getShopDetail'];
        });
    }

    // 获取收藏列表
    checkMyFavorite(){
        // 操作之前检查登录状态
        if (sessionStorage.getItem('user_id')){
            let params = {
                "tag" : "2",        //1 获取收藏的店铺； 2 获取收藏的宝贝
                "uId" : sessionStorage.getItem('user_id'),
                "access_token" : sessionStorage.getItem('access_token')
            };
            this.service.getData({"myFavorites" : params}).subscribe(res=>{
                for (let item of res['myFavorites'].rows) {
                    if (item.pId == this.route.snapshot.paramMap.get('id')) {
                        this.goodsDetail.isFavorite = 1;
                    }
                }
            })
        }
    }

    // 收藏商品
    collectGoods(){
        if (this.service.checkLoggedIn() && this.goodsDetail.isFavorite != 1) {
            let params = {
                "pId" : this.goodsDetail.goodsId,
                "uId" : sessionStorage.getItem('user_id'),
                "access_token" : sessionStorage.getItem('access_token')
            };
            this.service.getData({"favorite":params}).subscribe(res=>{
                console.log("收藏商品",res['favorite']);
                if (res['favorite'].rsp_code == 1){
                    this.checkMyFavorite();
                }
            });
        }
    }

    // 获取商品所有sku属性和属性值信息
    getGoodsSku(type:'toCart'|'buyNow'){
        this.attr_window = true;
        this.selected_attr.type = type;
        let params = {"goodsId":this.goodsDetail.goodsId};
        this.service.getData({"getAttrs":params}).subscribe(res=>{
            this.attr = res['getAttrs']['skuAttrs'];
        });
    }

    // 查询商品评价
    getGoodsEvaluate(){
        let params = {"goodsId":this.goodsDetail.goodsId};
        this.service.getData({"getFoodsEvaluate":params}).subscribe(res=>{
            this.evaluates = res["getFoodsEvaluate"];
        });
    }

    // 提交订单
    submitGoods(){
        // 检查登录状态
        if (this.service.checkLoggedIn()) {
            this.attr_window = false;
            for (let item of this.goodsDetail['goodsSkuList']) {
                let attrChar = item.attrChar.split(',');
                attrChar.pop();
                if (attrChar.sort().toString() == this.selected_attr.attrChar.sort().toString()) {
                    if (this.selected_attr.type == 'toCart') {
                        this.addToCart(item['goodsSkuId']);
                    }else if (this.selected_attr.type == 'buyNow') {
                        this.addToCart(item['goodsSkuId'],true);
                    }
                }
            }
        }
    }

    // 加入购物车
    addToCart(skuId,submit=false){
        // 操作之前检查登录状态
        if (this.service.checkLoggedIn()) {
            let params= {
                "skuId" : skuId,
                "num" : this.selected_attr.amounts,
                "uId" : sessionStorage.getItem('user_id'),
                "access_token" : sessionStorage.getItem('access_token')
            };
            this.service.getData({"addToCart":params}).subscribe(res=>{
                if (submit) {
                    this.service.router.navigate(['pages/orderSubmit'],{queryParams: { cartIds: res['addToCart'].cartId }});
                }else {
                    location.reload();
                }
            });
        }
    }

    //  步进器
    count(isAdd){
        let value = isAdd ? this.selected_attr.amounts+1 : this.selected_attr.amounts-1;
        this.selected_attr.amounts = value<1 ? 1 : value;
    }

    //  关闭规格属性选择窗口
    clickEvent(evt,boolen){
        evt.stopPropagation();
        if (!boolen)   return;
        this.attr_window = false;
    }

    // 选择规格
    selectAttr(attr){
        this.selected_attr.attr[attr['catagoryAttrId']] = attr['catagoryAttrValueId'];
        this.selected_attr.attrChar.push(attr['catagoryAttrValueId']);
    }

    // 滚动监听,动态设置header-bar的透明度
    scrolling(){
        this.ionContent.getScrollElement().then((res)=>{
            this.header_opacity = res.scrollTop > 100 ? 1 : res.scrollTop/100;
            let top = this.dom_header.nativeElement.offsetHeight;
            if (res.scrollTop+top+50 >= this.dom_details.nativeElement.offsetTop) {
                this.active_num = 3;
            }else if (res.scrollTop+top+50 >= this.dom_evaluate.nativeElement.offsetTop) {
                this.active_num = 2;
            }else if (res.scrollTop+top+50 >= this.dom_stores.nativeElement.offsetTop) {
                this.active_num = 1;
            }else if (res.scrollTop >= this.dom_goods.nativeElement.offsetTop) {
                this.active_num = 0;
            }
        });
    }

    // 滚动到指定位置
    scrollTo(dom){
        let scrollY = dom.nativeElement.offsetTop;
        let top = this.dom_header.nativeElement.offsetHeight;
        this.ionContent.scrollToPoint(0,scrollY-top,200);
    }

}
