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
import { ActionSheetController, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.quantity = "1";
        this.property = this.navParams.data;
    }
    PropertyDetailPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    PropertyDetailPage.prototype.addtocart = function () {
        var _this = this;
        if (this.quantity >= 0 && this.quantity <= this.property.stocks_available) {
            this.loading = this.loadingCtrl.create({
                content: 'Adding to Cart...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body_1 = urlSearchParams.toString();
            var header = new Headers();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option_1 = new RequestOptions({ headers: header });
            this.http.post('http://api.riceupfarmers.org/api/order/new', body_1, option_1)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                var g = res.order_number[0].id;
                _this.http.post('http://api.riceupfarmers.org/api/cart/add?qty=' + _this.quantity + '&productid=' + _this.property.id + '&orderid=' + g, body_1, option_1)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) {
                    _this.quantity = 1;
                    _this.loading.dismissAll();
                    _this.presentAlert("Product added to cart!");
                }, function (err) {
                    _this.loading.dismissAll();
                    _this.presentAlert("No Internet Connection!");
                });
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentAlert("No Internet Connection!");
            });
        }
        else {
            this.presentAlert("Quantity must be greater than 0 and less than " + this.property.stocks_available);
        }
    };
    PropertyDetailPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyDetailPage = __decorate([
        Component({
            selector: 'page-property-detail',
            templateUrl: 'property-detail.html'
        }),
        __metadata("design:paramtypes", [LoadingController, AlertController, GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());
export { PropertyDetailPage };
//# sourceMappingURL=property-detail.js.map