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
import { ShippingDetailsAddPage } from '../shipping-details-add/shipping-details-add';
import { ShippingDetailsUpdatePage } from '../shipping-details-update/shipping-details-update';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ShippingDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsPage = /** @class */ (function () {
    function ShippingDetailsPage(storage, platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        this.storage = storage;
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
        this.pushPage = ShippingDetailsAddPage;
    }
    ShippingDetailsPage.prototype.select = function (id, address, mobile) {
        this.storage.set('shipaddress', address);
        this.storage.set('shipmobile', mobile);
        this.GlobalvarsProvider.activeaddressaddress = address;
        this.GlobalvarsProvider.activeaddressmobile = mobile;
        this.navCtrl.pop();
    };
    ShippingDetailsPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(ShippingDetailsUpdatePage, property);
    };
    ShippingDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/shippingdetails/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.loading.dismissAll();
            _this.shipd = res;
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    };
    ShippingDetailsPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsPage.prototype.delship = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove you Shipping details?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new RequestOptions({ headers: header });
                        _this.http.delete('http://api.riceupfarmers.org/api/shippingdetail/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentAlert('Deleted!');
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ShippingDetailsPage.prototype.ionViewDidLoad = function () {
    };
    ShippingDetailsPage = __decorate([
        Component({
            selector: 'page-shipping-details',
            templateUrl: 'shipping-details.html',
        }),
        __metadata("design:paramtypes", [Storage, Platform, StatusBar, SplashScreen, ToastController, AlertController, LoadingController, GlobalvarsProvider, NavParams, Http, MenuController, NavController, Config])
    ], ShippingDetailsPage);
    return ShippingDetailsPage;
}());
export { ShippingDetailsPage };
//# sourceMappingURL=shipping-details.js.map