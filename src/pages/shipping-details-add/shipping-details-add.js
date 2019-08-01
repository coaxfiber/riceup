var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Config, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ShippingDetailsAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsAddPage = /** @class */ (function () {
    function ShippingDetailsAddPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
        this.mobile_no = "";
        this.address = "";
    }
    ShippingDetailsAddPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsAddPage.prototype.ionViewDidLoad = function () {
    };
    ShippingDetailsAddPage.prototype.addaddress = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/shippingdetail', { 'address': this.address, 'mobile_no': this.mobile_no }, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.presentAlert(res.message);
            _this.pop();
            // this.alertConfirm2(res.message);
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    };
    ShippingDetailsAddPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ShippingDetailsAddPage = __decorate([
        Component({
            selector: 'page-shipping-details-add',
            templateUrl: 'shipping-details-add.html',
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, ToastController, AlertController, LoadingController, GlobalvarsProvider, NavParams, Http, MenuController, NavController, Config])
    ], ShippingDetailsAddPage);
    return ShippingDetailsAddPage;
}());
export { ShippingDetailsAddPage };
//# sourceMappingURL=shipping-details-add.js.map