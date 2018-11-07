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
import { NavController, NavParams } from 'ionic-angular';
import { TransacPage } from '../transac/transac';
import { Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DispatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DispatchPage = /** @class */ (function () {
    function DispatchPage(alertCtrl, http, loadingCtrl, GlobalvarsProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timee = Math.random();
        this.dis = this.navParams.data;
    }
    DispatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DispatchPage');
    };
    DispatchPage.prototype.dispatch = function (id) {
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
            _this.navCtrl.setRoot(TransacPage);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    DispatchPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    DispatchPage = __decorate([
        Component({
            selector: 'page-dispatch',
            templateUrl: 'dispatch.html',
        }),
        __metadata("design:paramtypes", [AlertController, Http, LoadingController, GlobalvarsProvider, NavController, NavParams])
    ], DispatchPage);
    return DispatchPage;
}());
export { DispatchPage };
//# sourceMappingURL=dispatch.js.map