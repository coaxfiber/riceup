var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
import { Component } from '@angular/core';
import { ActionSheetController, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
var PropertyDetailPage = /** @class */ (function () {
    function PropertyDetailPage() {
        this.quantity = "1";
        this.timee = constructor(public, loadingCtrl, LoadingController, private, alertCtrl, AlertController, public, GlobalvarsProvider, GlobalvarsProvider, private, http, Http, public, actionSheetCtrl, ActionSheetController, public, navCtrl, NavController, public, navParams, NavParams, public, propertyService, PropertyService, public, toastCtrl, ToastController);
    }
    PropertyDetailPage = __decorate([
        Component({
            selector: 'page-property-detail',
            templateUrl: 'property-detail.html'
        })
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());
export { PropertyDetailPage };
{
    this.property = this.navParams.data;
}
openBrokerDetail(broker, any);
{
    this.navCtrl.push(BrokerDetailPage, broker);
}
addtocart();
{
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
}
presentAlert(val, any);
{
    var alert_1 = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
    });
    alert_1.present();
}
//# sourceMappingURL=property-detail.js.map