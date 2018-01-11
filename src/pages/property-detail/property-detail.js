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
import { ActionSheetController, NavController, NavParams, ToastController } from 'ionic-angular';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage(GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
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
        console.log(broker);
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    PropertyDetailPage.prototype.addtocart = function () {
        var _this = this;
        if (this.quantity >= 0 && this.quantity <= this.property.stocks_available) {
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
                _this.http.post('http://api.riceupfarmers.org/api/cart/add?qty=' + _this.quantity + '&productid=' + _this.property.id + '&orderid=' + res.order_number[0].id, body_1, option_1)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) {
                    _this.quantity = 1;
                    alert("Product added to cart!");
                });
            });
        }
        else {
            alert("Quantity must be greater than 0 and less than " + this.property.stocks_available);
        }
    };
    PropertyDetailPage = __decorate([
        Component({
            selector: 'page-property-detail',
            templateUrl: 'property-detail.html'
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());
export { PropertyDetailPage };
//# sourceMappingURL=property-detail.js.map