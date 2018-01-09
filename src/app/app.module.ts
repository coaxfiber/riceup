
import { AuthService } from '../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TermsandagreementPage} from '../pages/termsandagreement/termsandagreement';
import {OrderListPage} from '../pages/order-list/order-list';
import {CartPage} from '../pages/cart/cart';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';

import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import {SignupPage} from '../pages/signup/signup';
import {OrderinfoPage} from '../pages/orderinfo/orderinfo';
import {AddproductPage} from '../pages/addproduct/addproduct';
import {UserproductPage} from '../pages/userproduct/userproduct';
@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,AddproductPage,UserproductPage,OrderinfoPage,
    TermsandagreementPage,OrderListPage,CartPage,SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,AddproductPage,UserproductPage,OrderinfoPage,
    BrokerDetailPage,TermsandagreementPage,OrderListPage,CartPage,SignupPage
  ],
  providers: [
    Transfer,
    File,
    Camera,
    FilePath,
    StatusBar,
    SplashScreen,AuthService,
    PropertyService,
    BrokerService,GlobalvarsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
