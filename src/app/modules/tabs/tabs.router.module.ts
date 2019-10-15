import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services';
import { TabsPage } from './tabs.page';

import { HomeComponent, ClassifyComponent, ShoppingCarComponent, AccountComponent} from "../../page";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component : HomeComponent, data: {title: '首页',reuse:false}},
      {path: 'classify', component : ClassifyComponent, data: {title: '分类',reuse:false}},
      {path: 'account', component : AccountComponent, data: {title: '我的',reuse:false}, canActivate : [AuthGuard]},
      {path: 'cart', component : ShoppingCarComponent, data: {title: '购物车',reuse:false}, canActivate : [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
