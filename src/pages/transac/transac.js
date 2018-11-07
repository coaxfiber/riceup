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
import { DispatchPage } from '../dispatch/dispatch';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TransacPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransacPage = /** @class */ (function () {
    function TransacPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
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
        this.counter = 0;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this.presentToast();
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    // console.log("exitapp");
                    platform.exitApp();
                }
            }, 0);
        });
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/fordispatch', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                console.log(res);
                _this.orders = res;
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    }
    TransacPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    TransacPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransacPage');
    };
    TransacPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TransacPage.prototype.open = function (list) {
        this.navCtrl.push(DispatchPage, list);
    };
    TransacPage.prototype.dispatch = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Dispatching Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.patch('http://api.riceupfarmers.org/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    TransacPage = __decorate([
        Component({
            selector: 'page-transac',
            templateUrl: 'transac.html',
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, ToastController, AlertController, LoadingController, GlobalvarsProvider, NavParams, Http, MenuController, NavController, Config])
    ], TransacPage);
    return TransacPage;
}());
export { TransacPage };
//# sourceMappingURL=transac.js.map