import { NgModule }         from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule }     from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { PagesRouterModule } from './pages-router.module';

import { PagesPage } from './pages.page';

import {
    SettingComponent, AddressesComponent, AddressComponent, FavoriteComponent, DiscountCodeComponent,
    DiscountTicketComponent, HistoryComponent, OrderListComponent, OrderDetailComponent, OrderSubmitComponent,
    GoodsListComponent, GoodsDetailComponent, GoodsInfoComponent, InformationComponent, NewsComponent,
    NewsDetailComponent, RefundsComponent, RefundDetailComponent, StoreComponent, SearchComponent, FeedbackComponent,
    RefundsListComponent, EvaluateComponent, LicenseComponent
} from "../../page";

@NgModule({
  imports: [
    IonicModule, CommonModule,
    FormsModule, PagesRouterModule
  ],
  declarations: [
    PagesPage, NewsDetailComponent, RefundsComponent, RefundDetailComponent, StoreComponent, SearchComponent,
    SettingComponent, AddressesComponent, AddressComponent, FavoriteComponent, DiscountCodeComponent,
    DiscountTicketComponent, HistoryComponent, OrderListComponent, OrderDetailComponent, OrderSubmitComponent,
    GoodsListComponent, GoodsDetailComponent, GoodsInfoComponent, InformationComponent, NewsComponent,
    FeedbackComponent, RefundsListComponent, EvaluateComponent, LicenseComponent
  ]
})
export class PagesModule { }
