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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { OrderinfoPage } from '../orderinfo/orderinfo';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderListPage = /** @class */ (function () {
    function OrderListPage(alertCtrl, loadingCtrl, GlobalvarsProvider, menu, http, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Orders...',
        });
        this.loading.present();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/orders', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            if (res.message == undefined) {
                _this.orders = res;
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (err) {
            _this.presentAlert("No Internet Connection!");
        });
    }
    OrderListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    OrderListPage.prototype.callorderinfo = function (val) {
        this.navCtrl.push(OrderinfoPage, val);
    };
    OrderListPage = __decorate([
        Component({
            selector: 'page-order-list',
            templateUrl: 'order-list.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, MenuController, Http, NavController, NavParams])
    ], OrderListPage);
    return OrderListPage;
}());
export { OrderListPage };
//# sourceMappingURL=order-list.js.map