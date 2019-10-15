import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }         from '@angular/common/http';
import { Routes, RouterModule,RouteReuseStrategy } from '@angular/router';
import { FormsModule }        from '@angular/forms';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleReuseStrategy } from './services';
import { Error404Component, LoginComponent, RegisterComponent, ResetPasswordComponent } from "./page";

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, Error404Component, LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes, { useHash: true }),
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [
    StatusBar, SplashScreen,
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
