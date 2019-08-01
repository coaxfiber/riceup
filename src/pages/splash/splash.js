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
//https://www.youtube.com/watch?v=fE09dHu6sP0
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform, LoadingController } from 'ionic-angular';
import { PropertyListPage } from '../property-list/property-list';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(storage, statusBar, splashScreen, toast, loadingCtrl, alertCtrl, menu, events, GlobalvarsProvider, platform, navCtrl, http) {
        var _this = this;
        this.storage = storage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.events = events;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        storage.get('username').then(function (val) {
            _this.uname = val;
            storage.get('password').then(function (val2) {
                _this.pw = val2;
                if (val2 != null && val2 != undefined && val2 != '') {
                    _this.calltologin();
                }
                else
                    _this.guestlogin();
            });
        });
        storage.get('first').then(function (val2) {
            if (val2 != null && val2 != undefined && val2 != '') {
            }
            else
                _this.presentAlert2();
        });
    }
    SplashPage.prototype.calltologin = function () {
        var _this = this;
        if (this.uname != '' && this.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.uname;
            this.GlobalvarsProvider.password = this.pw;
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new Headers();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new RequestOptions({ headers: header });
            this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_1 = new RequestOptions({ headers: header });
                    _this.http.get('http://api.riceupfarmers.org/api/user', option_1)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.uname);
                    _this.storage.set('password', _this.pw);
                    var urlSearchParams_1 = new URLSearchParams();
                    urlSearchParams_1.append("passforpost", 'any');
                    var body_1 = urlSearchParams_1.toString();
                    var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option2_1 = new RequestOptions({ headers: header });
                    _this.storage.get('shipaddress').then(function (val2) {
                        if (val2 != null && val2 != undefined && val2 != '') {
                            _this.GlobalvarsProvider.activeaddressaddress = val2;
                            _this.storage.get('shipmobile').then(function (value) {
                                _this.GlobalvarsProvider.activeaddressmobile = value;
                            });
                        }
                        else {
                            _this.http.get('http://api.riceupfarmers.org/api/shippingdetails/', option2_1)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                _this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                                _this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                            }, function (Error) {
                                console.log(Error);
                                _this.presentAlert("No Internet Connection!");
                            });
                        }
                    });
                    _this.navCtrl.setRoot(PropertyListPage);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    SplashPage.prototype.guestlogin = function () {
        var _this = this;
        if (this.uname != '' && this.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = 'guest';
            this.GlobalvarsProvider.password = 'guest123';
            this.uname = 'guest';
            this.pw = 'guest123';
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new Headers();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new RequestOptions({ headers: header });
            this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_2 = new RequestOptions({ headers: header });
                    _this.http.get('http://api.riceupfarmers.org/api/user', option_2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.uname);
                    _this.storage.set('password', _this.pw);
                    _this.storage.set('first', _this.uname);
                    var urlSearchParams_2 = new URLSearchParams();
                    urlSearchParams_2.append("passforpost", 'any');
                    var body_2 = urlSearchParams_2.toString();
                    var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option2 = new RequestOptions({ headers: header });
                    _this.http.get('http://api.riceupfarmers.org/api/shippingdetails/', option2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        if (_this.GlobalvarsProvider.activeaddressid != undefined) {
                            _this.GlobalvarsProvider.activeaddressid = res[0].id;
                            _this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                            _this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                            _this.GlobalvarsProvider.activeaddressid2 = res[0].id;
                            _this.GlobalvarsProvider.activeaddressaddress2 = res[0].shipping_address;
                            _this.GlobalvarsProvider.activeaddressmobile2 = res[0].mobile_no;
                        }
                    }, function (Error) {
                        console.log(Error);
                        _this.presentAlert("No Internet Connection!");
                    });
                    _this.navCtrl.setRoot(PropertyListPage);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    SplashPage.prototype.createUser = function (user) {
        this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    };
    SplashPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SplashPage.prototype.presentAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: 'Welcome',
            subTitle: "You receive a free 3 month trial to upload and sell products! Once the trial is over, you can choose from a future payment system in order to keep selling products.",
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SplashPage = __decorate([
        Component({
            selector: 'page-splash',
            templateUrl: 'splash.html',
        }),
        __metadata("design:paramtypes", [Storage, StatusBar, SplashScreen, ToastController, LoadingController, AlertController, MenuController, Events, GlobalvarsProvider, Platform, NavController, Http])
    ], SplashPage);
    return SplashPage;
}());
export { SplashPage };
//# sourceMappingURL=splash.js.map