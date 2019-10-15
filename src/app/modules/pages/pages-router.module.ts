import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard }            from '../../services';
import { PagesPage }              from "./pages.page";

import {
    SettingComponent, AddressesComponent, AddressComponent, FavoriteComponent, DiscountCodeComponent,
    DiscountTicketComponent, HistoryComponent, OrderListComponent, OrderDetailComponent, OrderSubmitComponent,
    GoodsListComponent, GoodsDetailComponent, GoodsInfoComponent, InformationComponent, NewsComponent,
    NewsDetailComponent, RefundsComponent, RefundDetailComponent, StoreComponent, SearchComponent, FeedbackComponent,
    RefundsListComponent, EvaluateComponent, LicenseComponent
} from "../../page";

const routes: Routes = [
    {
        path: '',
        component: PagesPage,
        children: [
            { path: 'goodsList', component: GoodsListComponent, data: {title: '商品列表',reuse: true}},
            { path: 'goodsDetail/:id', component: GoodsDetailComponent, data: {title: '商品详情', reuse: false}},
            { path: 'store/:id', component: StoreComponent, data: {title: '店铺信息', reuse: false}},
            { path: 'goodsInfo/:id', component: GoodsInfoComponent, data: {title: '商品信息', reuse: true}},
            { path: 'search', component: SearchComponent, data: {title: '搜索', reuse: true}},
            { path: 'setting', component: SettingComponent, data: {title: '设置', reuse: true}, canActivate : [AuthGuard]},
            { path: 'addresses', component: AddressesComponent, data: {title: '收货地址',reuse: false}, canActivate : [AuthGuard]},
            { path: 'address', component: AddressComponent, data: {title: '添加地址', reuse: false}, canActivate : [AuthGuard]},
            { path: 'favorite', component: FavoriteComponent, data: {title: '我的收藏',reuse: true}, canActivate : [AuthGuard]},
            { path: 'discountCode', component: DiscountCodeComponent, data: {title: '优惠码',reuse: false}, canActivate : [AuthGuard]},
            { path: 'discountTicket', component: DiscountTicketComponent, data: {title: '我的优惠券',reuse: true}, canActivate : [AuthGuard]},
            { path: 'history', component: HistoryComponent, data: {title: '历史记录', reuse: true}, canActivate : [AuthGuard]},
            { path: 'orderList', component: OrderListComponent, data: {title: '我的订单',reuse: true}, canActivate : [AuthGuard]},
            { path: 'orderDetail/:id', component: OrderDetailComponent, data: {title: '订单详情'}, canActivate : [AuthGuard]},
            { path: 'evaluate/:id', component: EvaluateComponent, data: {title: '评价'}, canActivate : [AuthGuard]},
            { path: 'feedback', component: FeedbackComponent, data: {title: '意见反馈'}, canActivate : [AuthGuard]},
            { path: 'orderSubmit', component: OrderSubmitComponent, data: {title: '提交订单'}, canActivate : [AuthGuard]},
            { path: 'information', component: InformationComponent, data: {title: '我的资料'}, canActivate : [AuthGuard]},
            { path: 'news', component: NewsComponent, data: {title: '消息中心',reuse: true}, canActivate : [AuthGuard]},
            { path: 'newsDetail/:id', component: NewsDetailComponent, data: {title: '消息详情'}, canActivate : [AuthGuard]},
            { path: 'refunds/:id', component: RefundsComponent, data: {title: '申请退款',reuse: true}, canActivate : [AuthGuard]},
            { path: 'refundsList', component: RefundsListComponent, data: {title: '退款/售后',reuse: true}, canActivate : [AuthGuard]},
            { path: 'refundsDetail/:id', component: RefundDetailComponent, data: {title: '退款详情'}, canActivate : [AuthGuard]},
            { path: 'license', component: LicenseComponent, data: {title: '软件许可协议'}},
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRouterModule { }
