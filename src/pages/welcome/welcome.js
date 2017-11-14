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
import { FormBuilder } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PropertyListPage } from '../property-list/property-list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(events, GlobalvarsProvider, fb, platform, navCtrl, http) {
        this.events = events;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = {};
        this.pushPage = TermsandagreementPage;
        this.form = fb.group({
            name: fb.group({
                uname: '',
                pw: '',
            }),
        });
    }
    WelcomePage.prototype.calltologin = function () {
        var _this = this;
        if (this.form.value.name.uname != '' && this.form.value.name.pw != '') {
            var link = 'http://localhost/riceup/login.php?mode=1';
            var myData = JSON.stringify({ uname: this.form.value.name.uname, pw: this.form.value.name.pw });
            this.http.post(link, myData)
                .subscribe(function (data) {
                if (data["_body"] == 'wrong password or username!') {
                    alert("incorrect username or password!");
                }
                else {
                    _this.GlobalvarsProvider.setgid(data["_body"]);
                    _this.navCtrl.setRoot(PropertyListPage);
                    _this.createUser(_this.GlobalvarsProvider.getgid());
                }
            }, function (error) {
                alert("incorrect username or password!");
            });
        } // code...
        else {
            alert("Please input username or password");
        }
    };
    WelcomePage.prototype.createUser = function (user) {
        console.log('User created!');
        this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    };
    WelcomePage = __decorate([
        Component({
            selector: 'page-welcome',
            templateUrl: 'welcome.html'
        }),
        __metadata("design:paramtypes", [Events, GlobalvarsProvider, FormBuilder, Platform, NavController, Http])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
//# sourceMappingURL=welcome.js.map