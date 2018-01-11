var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AuthService } from '../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { PropertyListPage } from '../pages/property-list/property-list';
import { PropertyDetailPage } from '../pages/property-detail/property-detail';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { BrokerDetailPage } from '../pages/broker-detail/broker-detail';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { AboutPage } from '../pages/about/about';
import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TermsandagreementPage } from '../pages/termsandagreement/termsandagreement';
import { OrderListPage } from '../pages/order-list/order-list';
import { CartPage } from '../pages/cart/cart';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { SignupPage } from '../pages/signup/signup';
import { OrderinfoPage } from '../pages/orderinfo/orderinfo';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { UserproductPage } from '../pages/userproduct/userproduct';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { AccountPage } from '../pages/account/account';
import { Network } from '@ionic-native/network';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                WelcomePage,
                AboutPage,
                PropertyListPage,
                PropertyDetailPage,
                FavoriteListPage,
                BrokerListPage,
                BrokerDetailPage, AddproductPage, UserproductPage, OrderinfoPage, PrivacyPolicyPage,
                TermsandagreementPage, OrderListPage, CartPage, SignupPage, AccountPage
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
                BrokerListPage, AddproductPage, UserproductPage, OrderinfoPage, PrivacyPolicyPage,
                BrokerDetailPage, TermsandagreementPage, OrderListPage, CartPage, SignupPage, AccountPage
            ],
            providers: [
                Transfer,
                File,
                Camera,
                FilePath,
                StatusBar,
                SplashScreen, AuthService,
                PropertyService,
                BrokerService, GlobalvarsProvider, Network,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map