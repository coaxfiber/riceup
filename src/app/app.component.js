var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TermsandagreementPage } from '../pages/termsandagreement/termsandagreement';
import { PropertyListPage } from '../pages/property-list/property-list';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { CartPage } from '../pages/cart/cart';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { OrderListPage } from '../pages/order-list/order-list';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';
import { UserproductPage } from '../pages/userproduct/userproduct';
import { Http } from '@angular/http';
import { AccountPage } from '../pages/account/account';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
var MyApp = /** @class */ (function () {
    function MyApp(network, toast, alertCtrl, http, events, platform, statusBar, splashScreen, GlobalvarsProvider) {
        var _this = this;
        this.network = network;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.rootPage = WelcomePage;
        this.name = null;
        this.group = null;
        this.initializeApp();
        this.farmer = [
            {
                id: 1,
                firstname: "Elton Bagne",
                lastname: "Gwapo",
                middlename: "617-244-3672",
                business_name: "617-244-3672"
            }
        ];
        events.subscribe('user:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`4
            _this.farmer = user;
            _this.GlobalvarsProvider.setloggeduser(user);
            if (user.is_farmer == 1) {
                _this.accountMenuItems = [
                    { title: 'My Account', component: AccountPage, icon: 'ios-contact' },
                    { title: 'My Products', component: UserproductPage, icon: 'archive' },
                ];
            }
            else {
                _this.accountMenuItems = [
                    { title: 'My Account', component: AccountPage, icon: 'ios-contact' },
                ];
            }
        });
        this.appMenuItems = [
            { title: 'Products', component: PropertyListPage, icon: 'home' },
            { title: 'Farmers', component: BrokerListPage, icon: 'people' },
            { title: 'Cart', component: CartPage, icon: 'md-cart' },
            { title: 'My Orders', component: OrderListPage, icon: 'checkmark-circle' },
        ];
        this.helpMenuItems = [
            { title: 'Terms and Conditions', component: TermsandagreementPage, icon: 'bookmark' },
            { title: 'Privacy Policy', component: PrivacyPolicyPage, icon: 'ios-information-outline' },
            { title: 'About', component: AboutPage, icon: 'information-circle' },
        ];
    }
    MyApp.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toast.create({
            message: "You are now " + connectionState + " via " + networkType,
            duration: 3000
        }).present();
    };
    MyApp.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.GlobalvarsProvider.setcredentials();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.alertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'are you sure you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.nav.setRoot(WelcomePage);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Network, ToastController, AlertController, Http, Events, Platform, StatusBar, SplashScreen, GlobalvarsProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map