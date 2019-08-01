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
import { TermsandagreementPage } from '../termsandagreement/termsandagreement';
//https://www.youtube.com/watch?v=fE09dHu6sP0
import { AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Platform, LoadingController } from 'ionic-angular';
import { PropertyListPage } from '../property-list/property-list';
import { SignupPage } from '../signup/signup';
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
var WelcomePage = /** @class */ (function () {
    function WelcomePage(storage, statusBar, splashScreen, toast, loadingCtrl, alertCtrl, menu, events, GlobalvarsProvider, fb, platform, navCtrl, http) {
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
        this.counter = 0;
        this.data = {};
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
        this.pushPage = TermsandagreementPage;
        this.login = SignupPage;
        this.form = fb.group({
            name: fb.group({
                uname: '',
                pw: '',
            }),
        });
    }
    WelcomePage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    WelcomePage.prototype.calltologin = function () {
        var _this = this;
        if (this.form.value.name.uname != '' && this.form.value.name.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.form.value.name.uname;
            this.GlobalvarsProvider.password = this.form.value.name.pw;
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
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
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
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_1)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.form.value.name.uname);
                    _this.storage.set('password', _this.form.value.name.pw);
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
                            _this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option2_1)
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
    WelcomePage.prototype.guestlogin = function () {
        var _this = this;
        this.form.value.name.uname = 'guest';
        this.form.value.name.pw = 'guest123';
        if (this.form.value.name.uname != '' && this.form.value.name.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.form.value.name.uname;
            this.GlobalvarsProvider.password = this.form.value.name.pw;
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
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
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
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.form.value.name.uname);
                    _this.storage.set('password', _this.form.value.name.pw);
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
    WelcomePage.prototype.createUser = function (user) {
        this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    };
    WelcomePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    WelcomePage = __decorate([
        Component({
            selector: 'page-welcome',
            templateUrl: 'welcome.html'
        }),
        __metadata("design:paramtypes", [Storage, StatusBar, SplashScreen, ToastController, LoadingController, AlertController, MenuController, Events, GlobalvarsProvider, FormBuilder, Platform, NavController, Http])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
/*
        if (this.form.value.name.uname!=''&&this.form.value.name.pw!='') {
          
         var link = 'http://riceupfarmers.com/oauth/token';
         var myData = JSON.stringify({grant_type:'password',client_id:'2',client_secret:'uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu',usernamei:this.form.value.name.uname,passwowrd:this.form.value.name.pw,username:'windellevega',password:'pass123',scope:''});
      
        let headers = new Headers(
        {
          'Content-Type' : 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });


         this.http.post(link, myData, options)
         .map(response => response.json())
         .subscribe(data => {
           console.log(data);
             this.GlobalvarsProvider.setgid(data[0]);
             this.createUser(data[0]);
            this.navCtrl.setRoot(PropertyListPage);
             console.log(data[0]);
         }
         , error => {
         alert(error);
         });
       } code...
      else{
        alert("Please input username or password");
      }*/ 
//# sourceMappingURL=welcome.js.map