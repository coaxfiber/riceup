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
var WelcomePage = /** @class */ (function () {
    function WelcomePage(loadingCtrl, alertCtrl, menu, events, GlobalvarsProvider, fb, platform, navCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.events = events;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = {};
        this.pushPage = TermsandagreementPage;
        this.login = SignupPage;
        this.form = fb.group({
            name: fb.group({
                uname: '',
                pw: '',
            }),
        });
        this.menu.enable(false);
    }
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
            header.append("Accept", "application/json");
            var option = new RequestOptions({ headers: header });
            this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                //wwew start
                var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                var option = new RequestOptions({ headers: header });
                _this.http.get('http://api.riceupfarmers.org/api/user', option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) {
                    _this.createUser(data);
                }, function (error) {
                    _this.presentAlert("Slow internet Connection!");
                    _this.loading.dismissAll();
                });
                //wew end
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(PropertyListPage);
            }, function (error) {
                _this.presentAlert("Incorrect username or password");
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
        __metadata("design:paramtypes", [LoadingController, AlertController, MenuController, Events, GlobalvarsProvider, FormBuilder, Platform, NavController, Http])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
/*
        if (this.form.value.name.uname!=''&&this.form.value.name.pw!='') {
          
         var link = 'http://riceupfarmers.org/oauth/token';
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