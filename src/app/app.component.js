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
import { PropertyListPage } from '../pages/property-list/property-list';
import { BrokerListPage } from '../pages/broker-list/broker-list';
import { FavoriteListPage } from '../pages/favorite-list/favorite-list';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, GlobalvarsProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.rootPage = WelcomePage;
        this.gid = this.GlobalvarsProvider.getgid();
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Product', component: PropertyListPage, icon: 'home' },
            { title: 'Farmers', component: BrokerListPage, icon: 'people' },
            { title: 'Cart', component: FavoriteListPage, icon: 'star' },
            { title: 'My Orders', component: WelcomePage, icon: 'checkmark-circle' },
        ];
        this.accountMenuItems = [
            { title: 'My Account', component: WelcomePage, icon: 'ios-contact' },
            { title: 'Logout', component: WelcomePage, icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Terms and Conditions', component: WelcomePage, icon: 'bookmark' },
            { title: 'Privacy Policy', component: WelcomePage, icon: 'bookmark' },
            { title: 'About', component: AboutPage, icon: 'information-circle' },
        ];
    }
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
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, GlobalvarsProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map