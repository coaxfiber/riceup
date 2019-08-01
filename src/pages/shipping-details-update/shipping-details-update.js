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
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
/**
 * Generated class for the ShippingDetailsUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsUpdatePage = /** @class */ (function () {
    function ShippingDetailsUpdatePage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = this.navParams.data;
    }
    ShippingDetailsUpdatePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsUpdatePage.prototype.updateaddress = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.patch('http://api.riceupfarmers.org/api/shippingdetail/' + this.address.id, { 'address': this.address.shipping_address, 'mobile_no': this.address.mobile_no }, option)
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
    ShippingDetailsUpdatePage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ShippingDetailsUpdatePage.prototype.ionViewDidLoad = function () {
    };
    ShippingDetailsUpdatePage = __decorate([
        Component({
            selector: 'page-shipping-details-update',
            templateUrl: 'shipping-details-update.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, Http, NavController, NavParams])
    ], ShippingDetailsUpdatePage);
    return ShippingDetailsUpdatePage;
}());
export { ShippingDetailsUpdatePage };
//# sourceMappingURL=shipping-details-update.js.map