import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component, LoginComponent, RegisterComponent, ResetPasswordComponent } from "./page";

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './modules/tabs/tabs.module#TabsModule' },
  { path: 'pages', loadChildren: './modules/pages/pages.module#PagesModule' },
  { path: 'login', component : LoginComponent, data: {title: '登录'}},
  { path: 'register', component : RegisterComponent, data: {title: '注册'} },
  { path: 'rePassword', component : ResetPasswordComponent, data: {title: '重置密码'} },
  { path: '**', component : Error404Component, data: {title: '错误页面'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
